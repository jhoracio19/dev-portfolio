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
    {
      id: 'calorie-tracker',
      title: 'Calorie Tracker',
      description: 'Contador de calorías y ejercicios diseñado para el seguimiento diario de la salud. Permite categorizar actividades, calcular balances calóricos y editar registros existentes. Construido con una arquitectura robusta basada en useReducer para garantizar la escalabilidad y predictibilidad de los datos.',
      image: 'assets/proyects/calorie-tracker.png', // Reemplazar por imagen real si existe
      technologies: ['React.js', 'TypeScript', 'useReducer', 'Tailwind CSS'],
      githubUrl: 'https://github.com/jhoracio19/calorie-tracker.git',
      demoUrl: 'https://calorie-tracker-jh.netlify.app/'
    },
    {
      id: 'guitarla-react',
      title: 'GuitarLA',
      description: 'Aplicación de e-commerce y carrito de compras desarrollada con React y TypeScript. Implementa arquitectura limpia con Custom Hooks, persistencia de datos y lógica de negocio dinámica.',
      image: 'assets/proyects/guitarla.png', // Reemplazar por imagen real si existe
      technologies: ['React.js', 'TypeScript', 'Custom Hooks'],
      githubUrl: 'https://github.com/jhoracio19/guitarla-react-ts.git',
      demoUrl: 'https://guitarla-sho.netlify.app/'
    },
    {
      id: 'restaurant-calculator',
      title: 'Restaurant Order Calculator',
      description: 'Aplicación interactiva para la gestión de consumos y cálculo dinámico de propinas. Demuestra el uso avanzado de Custom Hooks, renderizado condicional, estado derivado con useMemo y diseño UI responsive con Tailwind CSS.',
      image: 'assets/proyects/restaurant-order.png', // Reemplazar por imagen real si existe
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'useMemo'],
      githubUrl: 'https://github.com/jhoracio19/restaurant-order-calculator.git',
      demoUrl: 'https://calculator-tips-jh.netlify.app/'
    },
    // Añade más proyectos aquí para la página de "Ver más"

  ]);

  getProjects() {
    return this.projectsList;
  }

  getFeaturedProjects() {
    // Retorna los primeros 4 proyectos marcados como importantes
    return this.projectsList().slice(0, 4);
  }
}
