import { Component, signal, OnInit } from '@angular/core'; // Añadimos OnInit
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { TechStack } from "./components/tech-stack/tech-stack";
import { About } from "./components/about/about";
import { Experience } from "./components/experience/experience";
import { Footer } from "./components/footer/footer";
import { Title, Meta } from '@angular/platform-browser';
import AOS from 'aos'; // Importamos la librería de animaciones

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [Navbar, Hero, Projects, TechStack, About, Experience, Footer]
})
export class App implements OnInit { // Implementamos la interfaz OnInit

  protected readonly appTitle = signal('mi-portfolio-dev');

  constructor(private titleService: Title, private metaService: Meta) {
    // Configuración de SEO
    this.titleService.setTitle('José Horacio | Desarrollador Fullstack & Ing. en TI BUAP');
    this.metaService.addTags([
      { name: 'description', content: 'Portafolio de José Horacio, estudiante de Ingeniería en TI en la BUAP. Especialista en SaaS con Django, Angular y React.' },
      { name: 'keywords', content: 'José Horacio, BUAP, Ingeniería TI, Django, Angular, Python, React, Portafolio, Programador Puebla' },
      { name: 'author', content: 'José Horacio' },
      { property: 'og:title', content: 'José Horacio | Fullstack Developer' },
      { property: 'og:description', content: 'Construyendo soluciones SaaS robustas con el stack moderno.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'assets/og-image.png' }
    ]);
  }

  ngOnInit() {
    // Inicialización de animaciones para que funcionen al hacer scroll
    AOS.init({
      duration: 1000, // Duración de la animación en ms
      once: false,    // Permite que la animación se repita al subir y bajar
      mirror: true,   // Refleja la animación al hacer scroll hacia arriba
      easing: 'ease-out-back' // Efecto de movimiento más fluido
    });
  }
}
