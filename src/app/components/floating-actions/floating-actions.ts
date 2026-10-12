import { Component, ElementRef, HostListener, OnDestroy, ViewChild, afterNextRender, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-floating-actions',
  templateUrl: './floating-actions.html',
  styleUrl: './floating-actions.css',
})
export class FloatingActions implements OnDestroy {
  private document = inject(DOCUMENT);
  private host = inject(ElementRef<HTMLElement>);
  private language = inject(LanguageService);
  readonly visible = signal(false);
  readonly expanded = signal(false);
  readonly mobile = signal(false);
  readonly labels = computed(() => this.language.lang() === 'es'
    ? { navigation: 'Contacto rápido', open: 'Abrir contacto rápido', close: 'Cerrar contacto rápido', linkedin: 'LinkedIn (abre en una pestaña nueva)', email: 'Enviar correo', cv: 'Descargar CV' }
    : { navigation: 'Quick contact', open: 'Open quick contact', close: 'Close quick contact', linkedin: 'LinkedIn (opens in a new tab)', email: 'Send email', cv: 'Download CV' });
  @ViewChild('toggleButton') private toggleButton?: ElementRef<HTMLButtonElement>;
  private intersection?: IntersectionObserver;
  private mutations?: MutationObserver;
  private heroActions?: Element | null;
  private breakpoint?: MediaQueryList;
  private resize = () => {
    this.mobile.set(this.breakpoint?.matches ?? false);
    this.expanded.set(false);
  };

  constructor() {
    afterNextRender(() => {
      this.breakpoint = matchMedia('(max-width: 640px)');
      this.resize();
      this.breakpoint.addEventListener('change', this.resize);
      this.intersection = new IntersectionObserver(entries => {
        const entry = entries[0];
        this.visible.set(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
        if (!this.visible()) this.expanded.set(false);
      });
      this.observeHero();
      this.mutations = new MutationObserver(() => this.observeHero());
      this.mutations.observe(this.document.querySelector('main')!, { childList: true, subtree: true });
    });
  }

  private observeHero() {
    const target = this.document.querySelector('.hero-copy .action-row');
    if (this.heroActions === target) return;
    this.intersection?.disconnect();
    this.heroActions = target;
    this.expanded.set(false);
    if (target) this.intersection?.observe(target);
    else this.visible.set(true);
  }

  toggle() { this.expanded.update(value => !value); }

  @HostListener('document:keydown.escape')
  closeWithKeyboard() {
    if (!this.expanded()) return;
    this.expanded.set(false);
    this.toggleButton?.nativeElement.focus();
  }

  @HostListener('document:click', ['$event'])
  closeOutside(event: MouseEvent) {
    if (event.target instanceof Node && !this.host.nativeElement.contains(event.target)) this.expanded.set(false);
  }

  ngOnDestroy() {
    this.intersection?.disconnect();
    this.mutations?.disconnect();
    this.breakpoint?.removeEventListener('change', this.resize);
  }
}
