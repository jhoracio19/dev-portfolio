import {
  Component,
  computed,
  signal,
  OnInit,
  OnDestroy,
  inject,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { ScrollService } from '../../services/scroll.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  isMenuOpen = signal(false);
  isMobile = signal(false);
  activeSection = signal('inicio');
  public langService = inject(LanguageService);
  t = this.langService.current;
  links = computed(() => [
    { id: 'proyectos', label: this.t().nav.projects },
    { id: 'experiencia', label: this.t().nav.experience },
    { id: 'sobre-mi', label: this.t().nav.about },
  ]);
  @ViewChild('menuToggle') menuToggle?: ElementRef<HTMLButtonElement>;
  private document = inject(DOCUMENT);
  private platform = inject(PLATFORM_ID);
  private router = inject(Router);
  private scrollService = inject(ScrollService);
  private observer?: IntersectionObserver;
  private navigation?: Subscription;
  private timer?: ReturnType<typeof setTimeout>;
  private oldOverflow = '';
  private breakpoint?: MediaQueryList;
  private resize = () => {
    this.isMobile.set(!this.breakpoint?.matches);
    if (this.breakpoint?.matches) this.closeMenu(false);
  };

  ngOnInit() {
    if (!isPlatformBrowser(this.platform)) return;
    this.scheduleObserver();
    this.navigation = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.scheduleObserver());
    this.breakpoint = window.matchMedia('(min-width: 900px)');
    this.resize();
    this.breakpoint.addEventListener('change', this.resize);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    this.navigation?.unsubscribe();
    clearTimeout(this.timer);
    this.breakpoint?.removeEventListener('change', this.resize);
    this.closeMenu(false);
  }
  toggleMenu() {
    if (this.isMenuOpen()) return this.closeMenu();
    this.oldOverflow = this.document.documentElement.style.overflow;
    this.document.documentElement.style.overflow = 'hidden';
    this.scrollService.setScrollLocked(true);
    this.isMenuOpen.set(true);
  }
  closeMenu(restoreFocus = true) {
    if (!this.isMenuOpen()) return;
    this.isMenuOpen.set(false);
    this.document.documentElement.style.overflow = this.oldOverflow;
    this.scrollService.setScrollLocked(false);
    if (restoreFocus) this.menuToggle?.nativeElement.focus();
  }
  onMenuKeydown(event: KeyboardEvent) {
    if (!this.isMenuOpen()) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMenu();
      return;
    }
    if (event.key !== 'Tab') return;
    const nav = this.menuToggle?.nativeElement.closest('nav');
    const elements = Array.from(nav?.querySelectorAll<HTMLElement>('a[href], button') ?? []).filter(
      (el) => el.getClientRects().length > 0,
    );
    const first = elements[0],
      last = elements[elements.length - 1];
    if (event.shiftKey && this.document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && this.document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
  private scheduleObserver() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.observer?.disconnect();
      this.activeSection.set('');
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries)
            if (entry.isIntersecting) this.activeSection.set(entry.target.id);
        },
        { rootMargin: '-15% 0px -65% 0px' },
      );
      this.document
        .querySelectorAll('section[id], footer[id]')
        .forEach((el) => this.observer?.observe(el));
    }, 100);
  }
}
