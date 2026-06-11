import { Component, signal, computed } from '@angular/core';
import { Project } from '../../models/project-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = signal<Project[]>([
    {
      id: 'flowcard',
      title: 'FlowCard',
      description: 'Plataforma SaaS full-stack para la gestión inteligente y automatización de finanzas personales enfocada en el crédito.',
      image: 'assets/flowcard.png',
      technologies: ['Django', 'PostgreSQL', 'Python'],
      githubUrl: 'https://github.com/jhoracio19',
    },
    {
      id: 'gifapp',
      title: 'GifApp',
      description: 'Aplicación de búsqueda en tiempo real con arquitectura basada en servicios reactivos y módulos independientes.',
      image: 'assets/gifapp.png',
      technologies: ['Angular', 'TypeScript', 'RxJS'],
      githubUrl: 'https://github.com/jhoracio19/GifsApp',
      demoUrl: 'https://gifs-app-jhag.netlify.app/#/dashboard/trending',
    },
    {
      id: 'devilearn',
      title: 'Devilearn',
      description: 'Plataforma educativa inspirada en Udemy construida con el ORM de Django y arquitectura MVT.',
      image: 'assets/devilearn.png',
      technologies: ['Django', 'SQLite', 'Python'],
      githubUrl: 'https://github.com/jhoracio19/Devilearn',
    },
    {
      id: 'minijuego',
      title: 'Minijuego',
      description: 'Minijuego interactivo enfocado en la gestión eficiente de estados globales y lógica de juegos.',
      image: 'assets/minijuego.png',
      technologies: ['React.js', 'JavaScript'],
      githubUrl: 'https://github.com/jhoracio19/hanging',
      demoUrl: 'https://minigamejh.netlify.app/',
    },
  ]);

  filterSelected = signal<string>('Todos');

  // Obtener todas las tecnologías únicas para los botones de filtro
  categories = computed(() => {
    const techs = this.projects().flatMap((p) => p.technologies);
    return ['Todos', ...new Set(techs)];
  });

  filteredProjects = computed(() => {
    const filter = this.filterSelected();
    if (filter === 'Todos') return this.projects();
    return this.projects().filter((p) => p.technologies.includes(filter));
  });

  setFilter(filter: string) {
    this.filterSelected.set(filter);
  }
}
