import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private router = inject(Router);
  private lenisInstance?: Lenis;

  setLenis(lenis: Lenis) {
    this.lenisInstance = lenis;
  }

  setScrollLocked(locked: boolean) {
    if (locked) this.lenisInstance?.stop();
    else this.lenisInstance?.start();
  }

  scrollTo(targetId: string, offset = -75) {
    const cleanId = targetId.replace('#', '');

    if (this.router.url !== '/' && !this.router.url.startsWith('/#')) {
      this.router.navigate(['/'], { fragment: cleanId }).then(() => {
        setTimeout(() => this.performScroll(cleanId, offset), 150);
      });
      return;
    }

    this.performScroll(cleanId, offset);
  }

  private performScroll(cleanId: string, offset: number) {
    const element = document.getElementById(cleanId);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({
      top,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }
}
