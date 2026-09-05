import { Injectable, OnDestroy } from '@angular/core';

/** Enhances rendered content; without JavaScript every block remains visible. */
@Injectable({ providedIn: 'root' })
export class MotionService implements OnDestroy {
  private observer?: IntersectionObserver;
  private mutations?: MutationObserver;
  private preference?: MediaQueryList;
  private frame = 0;
  private animations = new Set<Animation>();
  private seen = new WeakSet<Element>();
  private selector = '.section-heading, .project-feature, .experience-row, .hack-card, .stack-group, .about-layout > div, .contact-heading, .contact-actions, .catalog-card';
  private onPreference = () => {
    if (this.preference?.matches) this.animations.forEach(animation => animation.finish());
  };

  init() {
    this.preference = matchMedia('(prefers-reduced-motion: reduce)');
    this.preference.addEventListener('change', this.onPreference);
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        this.observer?.unobserve(entry.target);
        if (this.preference?.matches) return;
        const animation = entry.target.animate(
          [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)' },
        );
        this.animations.add(animation);
        animation.onfinish = () => this.animations.delete(animation);
      });
    }, { threshold: 0.08 });
    this.scan();
    this.mutations = new MutationObserver(() => {
      cancelAnimationFrame(this.frame);
      this.frame = requestAnimationFrame(() => this.scan());
    });
    this.mutations.observe(document.querySelector('app-root')!, { childList: true, subtree: true });
  }

  private scan() {
    document.querySelectorAll(this.selector).forEach(element => {
      if (this.seen.has(element)) return;
      this.seen.add(element);
      this.observer?.observe(element);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.mutations?.disconnect();
    this.preference?.removeEventListener('change', this.onPreference);
    if (typeof cancelAnimationFrame !== 'undefined') cancelAnimationFrame(this.frame);
    this.animations.forEach(animation => animation.cancel());
    this.animations.clear();
  }
}
