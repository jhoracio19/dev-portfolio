import { Injectable, inject, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Scroll } from '@angular/router';
import { Subscription } from 'rxjs';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root',
})
export class ScrollService implements OnDestroy {
  private router = inject(Router);
  private lenisInstance?: Lenis;
  private navigation?: Subscription;
  private frame = 0;
  private onAnchorClick = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
    if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
    const url = new URL(anchor.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
    const id = decodeURIComponent(url.hash.slice(1));
    if (!document.getElementById(id)) return;
    event.preventDefault();
    if (id === 'main-content') {
      document.getElementById(id)?.focus({ preventScroll: true });
      this.performScroll(id, -100);
    } else if (this.router.parseUrl(this.router.url).fragment === id) {
      this.performScroll(id, -100);
    } else {
      void this.router.navigate([], { fragment: id, queryParamsHandling: 'preserve' });
    }
  };

  setLenis(lenis: Lenis) {
    this.lenisInstance = lenis;
    document.addEventListener('click', this.onAnchorClick);
    this.navigation = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        lenis.scrollTo(window.scrollY, { immediate: true });
      }
      if (event instanceof Scroll) {
        cancelAnimationFrame(this.frame);
        this.frame = requestAnimationFrame(() => {
          lenis.resize();
          if (event.position) lenis.scrollTo(event.position[1], { immediate: true });
          else if (event.anchor) this.performScroll(event.anchor, -100);
          else lenis.scrollTo(0, { immediate: true });
        });
      }
    });
  }

  setScrollLocked(locked: boolean) {
    if (locked) this.lenisInstance?.stop();
    else this.lenisInstance?.start();
  }

  private performScroll(cleanId: string, offset: number) {
    const element = document.getElementById(cleanId);
    if (!element) return;

    // Numeric targets avoid applying both CSS scroll margins and the header offset.
    const top = element.getBoundingClientRect().top + window.scrollY + offset;
    if (this.lenisInstance) {
      this.lenisInstance.resize();
      this.lenisInstance.scrollTo(top, { duration: 1.05 });
      return;
    }
    window.scrollTo({
      top,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }

  ngOnDestroy() {
    this.navigation?.unsubscribe();
    if (typeof document !== 'undefined') document.removeEventListener('click', this.onAnchorClick);
    if (typeof cancelAnimationFrame !== 'undefined') cancelAnimationFrame(this.frame);
    this.lenisInstance = undefined;
  }
}
