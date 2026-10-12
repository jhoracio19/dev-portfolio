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
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.motionService.init();
  }

  ngOnDestroy() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.lenis?.destroy();
    this.scrollService.ngOnDestroy();
    this.motionService.ngOnDestroy();
  }
}
