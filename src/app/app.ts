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

    const animate = (time: number) => {
      this.lenis?.raf(time);
      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  ngOnDestroy() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.lenis?.destroy();
  }
}
