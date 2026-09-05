import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  AfterViewInit,
  PLATFORM_ID,
  signal,
  inject,
} from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Title, Meta } from '@angular/platform-browser';
import Lenis from 'lenis';
import { RouterOutlet } from '@angular/router';
import { ScrollService } from './services/scroll.service';
import { MotionService } from './services/motion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [Navbar, Footer, RouterOutlet],
})
export class App implements OnInit, AfterViewInit, OnDestroy {
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

  private scrollService = inject(ScrollService);
  private motionService = inject(MotionService);
  private viewportScroller = inject(ViewportScroller);

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.viewportScroller.setOffset([0, 100]);
    this.titleService.setTitle('José Horacio | Desarrollador Fullstack | Estudiante BUAP');
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      anchors: false,
      respectReducedMotion: true,
    });

    this.scrollService.setLenis(this.lenis);

    const animate = (time: number) => {
      this.lenis?.raf(time);
      this.updateCursor();
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.motionService.init();
    if (window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches)
      this.initCustomCursor();
  }

  ngOnDestroy() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.lenis?.destroy();
    this.scrollService.ngOnDestroy();
    this.motionService.ngOnDestroy();

    if (this.pointerMoveHandler) {
      window.removeEventListener('pointermove', this.pointerMoveHandler);
    }
    if (this.pointerLeaveHandler) {
      document.removeEventListener('mouseleave', this.pointerLeaveHandler);
    }
  }

  private initCustomCursor() {
    this.cursorDot = document.querySelector<HTMLElement>('.cursor-dot') ?? undefined;
    this.cursorRing = document.querySelector<HTMLElement>('.cursor-ring') ?? undefined;

    if (!this.cursorDot || !this.cursorRing) return;

    this.pointerMoveHandler = (event: PointerEvent) => {
      this.targetX = event.clientX;
      this.targetY = event.clientY;

      if (!this.cursorInitialized) {
        this.cursorInitialized = true;
        this.ringX = event.clientX;
        this.ringY = event.clientY;
        this.cursorDot?.classList.add('is-visible');
        this.cursorRing?.classList.add('is-visible');
      }

      this.cursorDot!.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;

      const target = event.target instanceof Element ? event.target : null;
      const isInteractive = Boolean(
        target?.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer'),
      );
      this.cursorRing?.classList.toggle('is-hovering', isInteractive);
      this.cursorDot?.classList.toggle('is-hovering', isInteractive);
    };

    this.pointerLeaveHandler = () => {
      this.cursorDot?.classList.remove('is-visible');
      this.cursorRing?.classList.remove('is-visible');
      this.cursorInitialized = false;
    };

    window.addEventListener('pointermove', this.pointerMoveHandler, { passive: true });
    document.addEventListener('mouseleave', this.pointerLeaveHandler);
  }

  private updateCursor() {
    if (!this.cursorRing || !this.cursorInitialized) return;

    this.ringX += (this.targetX - this.ringX) * 0.11;
    this.ringY += (this.targetY - this.ringY) * 0.11;

    this.cursorRing.style.transform = `translate3d(${this.ringX}px, ${this.ringY}px, 0) translate(-50%, -50%)`;
  }
}
