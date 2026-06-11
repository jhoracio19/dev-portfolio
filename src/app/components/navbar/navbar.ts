import { Component, signal, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  isMenuOpen = signal(false);
  activeSection = signal('inicio');
  private observer: IntersectionObserver | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollSpy();
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  toggleMenu() {
    this.isMenuOpen.update((val) => !val);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  private initScrollSpy() {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Ajusta para detectar la sección predominante
      threshold: 0,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    // Observar todas las secciones que tienen un ID
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => this.observer?.observe(section));
  }
}
