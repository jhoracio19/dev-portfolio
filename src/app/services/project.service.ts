import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project-model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsList = signal<Project[]>([
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
    // Añade más proyectos aquí para la página de "Ver más"
    {
      id: 'proyecto-extra-1',
      title: 'Explorador de Clima',
      description: 'Una herramienta sencilla pero potente para consultar el clima mundial en tiempo real.',
      image: 'assets/flowcard.png', // Placeholder
      technologies: ['JavaScript', 'API Rest'],
      githubUrl: 'https://github.com/jhoracio19',
    },
  ]);

  getProjects() {
    return this.projectsList;
  }

  getFeaturedProjects() {
    // Retorna los primeros 4 proyectos marcados como importantes
    return this.projectsList().slice(0, 4);
  }
}
