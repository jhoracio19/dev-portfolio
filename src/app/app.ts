import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { TechStack } from "./components/tech-stack/tech-stack";
import { About } from "./components/about/about";
import { Experience } from "./components/experience/experience";
import { Footer } from "./components/footer/footer";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, Hero, Projects, TechStack, About, Experience, Footer]
})
// ... imports previos
export class App {
  // Cambiamos el nombre para evitar conflictos con el servicio Title
  protected readonly appTitle = signal('mi-portfolio-dev');

  constructor(private titleService: Title, private metaService: Meta) {
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
}
