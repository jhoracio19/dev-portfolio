import { Component, signal, OnInit } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Title, Meta } from '@angular/platform-browser';
import AOS from 'aos';
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
export class App implements OnInit {
  protected readonly appTitle = signal('mi-portfolio-dev');

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {
    // Tu configuración de SEO está perfecta, ayuda a tu autoridad en la BUAP
    this.titleService.setTitle('José Horacio | Desarrollador Fullstack & Ing. en TI BUAP');
    // ... resto de tus meta tags ...
  }

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-back',
    });
  }
}
