import { DOCUMENT } from '@angular/common';
import { Injectable, afterNextRender, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);
  readonly theme = signal<'light' | 'dark'>('dark');

  constructor() {
    afterNextRender(() => {
      this.theme.set(this.document.documentElement.dataset['theme'] === 'light' ? 'light' : 'dark');
    });
  }

  toggle() {
    const next = this.theme() === 'dark' ? 'light' : 'dark';
    const apply = () => {
      this.theme.set(next);
      this.document.documentElement.dataset['theme'] = next;
      this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'light' ? '#fafafa' : '#090909');
      try { this.document.defaultView?.localStorage.setItem('portfolio-theme', next); } catch {}
    };
    const reduced = this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced && this.document.startViewTransition) this.document.startViewTransition(apply);
    else apply();
  }
}
