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
      description: 'Una plataforma pensada para dar tranquilidad financiera. Ayuda a gestionar créditos y automatizar finanzas personales de forma inteligente.',
      image: 'assets/flowcard.png',
      technologies: ['Django', 'PostgreSQL', 'Python'],
      githubUrl: 'https://github.com/jhoracio19',
    },
    {
      id: 'gifapp',
      title: 'GifApp',
      description: 'Mi interpretación de una búsqueda reactiva. Una aplicación rápida y fluida que demuestra el poder de los servicios reactivos en Angular.',
      image: 'assets/gifapp.png',
      technologies: ['Angular', 'TypeScript', 'RxJS'],
      githubUrl: 'https://github.com/jhoracio19/GifsApp',
      demoUrl: 'https://gifs-app-jhag.netlify.app/#/dashboard/trending',
    },
    {
      id: 'devilearn',
      title: 'Devilearn',
      description: 'Un espacio dedicado al aprendizaje. Una plataforma educativa robusta inspirada en las mejores prácticas de enseñanza online.',
      image: 'assets/devilearn.png',
      technologies: ['Django', 'SQLite', 'Python'],
      githubUrl: 'https://github.com/jhoracio19/Devilearn',
    },
    {
      id: 'minijuego',
      title: 'Minijuego',
      description: 'Diversión pura con lógica compleja. Un reto personal para dominar la gestión de estados globales y la interactividad en React.',
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
