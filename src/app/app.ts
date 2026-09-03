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
  private targetX = 0;
  private targetY = 0;
  private ringX = 0;
  private ringY = 0;
  private cursorInitialized = false;

  private pointerMoveHandler?: (event: PointerEvent) => void;
  private pointerLeaveHandler?: () => void;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.titleService.setTitle('José Horacio | Desarrollador Fullstack & Ing. en TI BUAP');
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

    this.lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
    });

    if (window.matchMedia('(pointer: fine)').matches) {
      this.initCustomCursor();
    }

    const animate = (time: number) => {
      this.lenis?.raf(time);
      this.updateCursor();
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  ngOnDestroy() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.lenis?.destroy();

    if (this.pointerMoveHandler) {
      document.removeEventListener('pointermove', this.pointerMoveHandler);
    }
    if (this.pointerLeaveHandler) {
      document.removeEventListener('mouseleave', this.pointerLeaveHandler);
    }

    document.body.classList.remove('has-custom-cursor');
  }

  private initCustomCursor() {
    this.cursorDot = document.querySelector<HTMLElement>('.cursor-dot') ?? undefined;
    this.cursorRing = document.querySelector<HTMLElement>('.cursor-ring') ?? undefined;

    if (!this.cursorDot || !this.cursorRing) return;

    document.body.classList.add('has-custom-cursor');

    this.pointerMoveHandler = (event: PointerEvent) => {
      this.targetX = event.clientX;
      this.targetY = event.clientY;

      if (!this.cursorInitialized) {
        this.cursorInitialized = true;
        this.ringX = event.clientX;
        this.ringY = event.clientY;
        this.cursorDot!.classList.add('is-visible');
        this.cursorRing!.classList.add('is-visible');
      }

      this.cursorDot!.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;

      const target = event.target instanceof Element ? event.target : null;
      const isInteractive = Boolean(
        target?.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')
      );
      this.cursorRing!.classList.toggle('is-hovering', isInteractive);
      this.cursorDot!.classList.toggle('is-hovering', isInteractive);
    };

    this.pointerLeaveHandler = () => {
      this.cursorDot?.classList.remove('is-visible');
      this.cursorRing?.classList.remove('is-visible');
      this.cursorInitialized = false;
    };

    document.addEventListener('pointermove', this.pointerMoveHandler, { passive: true });
    document.addEventListener('mouseleave', this.pointerLeaveHandler);
  }

  private updateCursor() {
    if (!this.cursorRing || !this.cursorInitialized) return;

    // Interpolación lineal suave (lerp) sincronizada con el frame de Lenis
    this.ringX += (this.targetX - this.ringX) * 0.15;
    this.ringY += (this.targetY - this.ringY) * 0.15;

    this.cursorRing.style.transform = `translate3d(${this.ringX}px, ${this.ringY}px, 0) translate(-50%, -50%)`;
  }
}
