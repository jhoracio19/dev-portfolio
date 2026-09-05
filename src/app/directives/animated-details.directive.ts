import { Directive, ElementRef, HostListener, inject, OnDestroy } from '@angular/core';

@Directive({ selector: 'details.case-details', standalone: true })
export class AnimatedDetailsDirective implements OnDestroy {
  private element = inject<ElementRef<HTMLDetailsElement>>(ElementRef).nativeElement;
  private animation?: Animation;
  private expanded?: boolean;
  private preference?: MediaQueryList;
  private onPreference = () => {
    if (this.preference?.matches) this.animation?.finish();
  };

  @HostListener('click', ['$event'])
  toggle(event: MouseEvent) {
    const summary = this.element.querySelector('summary');
    if (!(event.target instanceof Element) || event.target.closest('summary') !== summary) return;
    event.preventDefault();
    if (!this.preference) {
      this.preference = matchMedia('(prefers-reduced-motion: reduce)');
      this.preference.addEventListener('change', this.onPreference);
    }
    const expanded = !(this.expanded ?? this.element.open);
    const start = this.element.getBoundingClientRect().height;
    this.animation?.cancel();
    this.expanded = expanded;
    this.element.setAttribute('data-expanded', String(expanded));
    this.element.open = true;
    const end = expanded ? this.element.getBoundingClientRect().height : summary!.getBoundingClientRect().height + parseFloat(getComputedStyle(this.element).borderTopWidth);
    this.setContentInert(!expanded);
    if (this.preference.matches) return this.finish(expanded);
    this.element.style.overflow = 'hidden';
    this.animation = this.element.animate(
      { height: [`${start}px`, `${end}px`] },
      { duration: 320, easing: 'cubic-bezier(.2,.7,.2,1)' },
    );
    this.animation.onfinish = () => this.finish(expanded);
  }

  private setContentInert(inert: boolean) {
    Array.from(this.element.children).forEach(child => {
      if (child instanceof HTMLElement && child.tagName !== 'SUMMARY') child.inert = inert;
    });
  }

  private finish(expanded: boolean) {
    this.element.open = expanded;
    this.element.style.overflow = '';
    this.setContentInert(false);
    this.animation = undefined;
  }

  ngOnDestroy() {
    this.animation?.cancel();
    this.preference?.removeEventListener('change', this.onPreference);
  }
}
