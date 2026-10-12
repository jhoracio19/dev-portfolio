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
  private selector = '.hero-stage, .achievement-strip, .section-heading, .project-feature, .experience-row, .hack-card, .stack-group, .about-layout > div, .contact-heading, .contact-actions, .catalog-card';
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
        const siblings = Array.from(entry.target.parentElement?.children ?? []).filter(element => element.matches(this.selector));
        const delay = siblings.length > 1 ? (siblings.indexOf(entry.target) % 3) * 90 : 0;
        const animation = entry.target.animate(
          [{ opacity: 0, transform: 'translateY(30px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 750, delay, fill: 'backwards', easing: 'cubic-bezier(.16,1,.3,1)' },
        );
        this.animations.add(animation);
        animation.onfinish = animation.oncancel = () => this.animations.delete(animation);
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
