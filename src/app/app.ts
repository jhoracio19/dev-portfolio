import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Title, Meta } from '@angular/platform-browser';
import AOS from 'aos';
import Lenis from 'lenis';
// IMPORT CORRECTO:
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    RouterOutlet, // Aquí se inyectará el contenido dinámicamente
  ],
})
export class App implements OnInit, OnDestroy {
  protected readonly appTitle = signal('mi-portfolio-dev');
  private lenis?: Lenis;
  private animationFrameId?: number;
  private cursorDot?: HTMLElement;
  private cursorRing?: HTMLElement;
  private cursorTargetX = 0;
  private cursorTargetY = 0;
  private cursorRingX = 0;
  private cursorRingY = 0;
  private pointerMoveHandler?: (event: PointerEvent) => void;
  private pointerLeaveHandler?: () => void;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    // Tu configuración de SEO está perfecta, ayuda a tu autoridad en la BUAP
    this.titleService.setTitle('José Horacio | Desarrollador Fullstack & Ing. en TI BUAP');
    // ... resto de tus meta tags ...
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-back',
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (window.matchMedia('(pointer: fine)').matches) {
      this.initializeCustomCursor();
    }

    this.lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
    });

    const animate = (time: number) => {
      this.lenis?.raf(time);
      this.updateCustomCursor();
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  ngOnDestroy() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.lenis?.destroy();
    if (this.pointerMoveHandler) document.removeEventListener('pointermove', this.pointerMoveHandler);
    if (this.pointerLeaveHandler) document.removeEventListener('mouseleave', this.pointerLeaveHandler);
  }

  private initializeCustomCursor() {
    this.cursorDot = document.querySelector<HTMLElement>('.cursor-dot') ?? undefined;
    this.cursorRing = document.querySelector<HTMLElement>('.cursor-ring') ?? undefined;

    if (!this.cursorDot || !this.cursorRing) return;

    this.pointerMoveHandler = (event: PointerEvent) => {
      this.cursorTargetX = event.clientX;
      this.cursorTargetY = event.clientY;

      if (!this.cursorRing!.classList.contains('is-visible')) {
        this.cursorRingX = event.clientX;
        this.cursorRingY = event.clientY;
        this.cursorRing!.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      }

      this.cursorDot!.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      this.cursorDot!.classList.add('is-visible');
      this.cursorRing!.classList.add('is-visible');

      const target = event.target instanceof Element ? event.target : null;
      this.cursorRing!.classList.toggle(
        'is-hovering',
        Boolean(target?.closest('a, button, input, textarea, select, summary, [role="button"]')),
      );
    };

    this.pointerLeaveHandler = () => {
      this.cursorDot?.classList.remove('is-visible');
      this.cursorRing?.classList.remove('is-visible');
    };

    document.addEventListener('pointermove', this.pointerMoveHandler, { passive: true });
    document.addEventListener('mouseleave', this.pointerLeaveHandler);
  }

  private updateCustomCursor() {
    if (!this.cursorRing?.classList.contains('is-visible')) return;

    this.cursorRingX += (this.cursorTargetX - this.cursorRingX) * 0.16;
    this.cursorRingY += (this.cursorTargetY - this.cursorRingY) * 0.16;
    this.cursorRing.style.transform = `translate3d(${this.cursorRingX}px, ${this.cursorRingY}px, 0) translate(-50%, -50%)`;
  }
}
