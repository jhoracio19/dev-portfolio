import { Injectable, computed, inject } from '@angular/core';
import { Project } from '../models/project-model';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private langService = inject(LanguageService);

  private projectsData = computed<Project[]>(() => {
    const isEn = this.langService.lang() === 'en';

    return [
      {
        id: 'flowcard',
        title: 'FlowCard',
        description: isEn 
          ? 'A platform designed to provide financial peace of mind. Helps manage credits and automate personal finances intelligently.' 
          : 'Una plataforma pensada para dar tranquilidad financiera. Ayuda a gestionar créditos y automatizar finanzas personales de forma inteligente.',
        image: 'assets/flowcard.png',
        technologies: ['Django', 'PostgreSQL', 'Python'],
        githubUrl: 'https://github.com/jhoracio19',
      },
      {
        id: 'gifapp',
        title: 'GifApp',
        description: isEn
          ? 'My interpretation of reactive search. A fast and fluid application demonstrating the power of reactive services in Angular.'
          : 'Mi interpretación de una búsqueda reactiva. Una aplicación rápida y fluida que demuestra el poder de los servicios reactivos en Angular.',
        image: 'assets/gifapp.png',
        technologies: ['Angular', 'TypeScript', 'RxJS'],
        githubUrl: 'https://github.com/jhoracio19/GifsApp',
        demoUrl: 'https://gifs-app-jhag.netlify.app/#/dashboard/trending',
      },
      {
        id: 'devilearn',
        title: 'Devilearn',
        description: isEn
          ? 'A space dedicated to learning. A robust educational platform inspired by the best online teaching practices.'
          : 'Un espacio dedicado al aprendizaje. Una plataforma educativa robusta inspirada en las mejores prácticas de enseñanza online.',
        image: 'assets/devilearn.png',
        technologies: ['Django', 'SQLite', 'Python'],
        githubUrl: 'https://github.com/jhoracio19/Devilearn',
      },
      {
        id: 'minijuego',
        title: 'Minijuego',
        description: isEn
          ? 'Pure fun with complex logic. A personal challenge to master global state management and interactivity in React.'
          : 'Diversión pura con lógica compleja. Un reto personal para dominar la gestión de estados globales y la interactividad en React.',
        image: 'assets/minijuego.png',
        technologies: ['React.js', 'JavaScript'],
        githubUrl: 'https://github.com/jhoracio19/hanging',
        demoUrl: 'https://minigamejh.netlify.app/',
      },
      {
        id: 'calorie-tracker',
        title: 'Calorie Tracker',
        description: isEn
          ? 'Calorie and exercise counter designed for daily health tracking. Allows categorizing activities, calculating caloric balances, and editing records. Built with a robust architecture based on useReducer to ensure data scalability and predictability.'
          : 'Contador de calorías y ejercicios diseñado para el seguimiento diario de la salud. Permite categorizar actividades, calcular balances calóricos y editar registros existentes. Construido con una arquitectura robusta basada en useReducer para garantizar la escalabilidad y predictibilidad de los datos.',
        image: 'assets/flowcard.png', 
        technologies: ['React.js', 'TypeScript', 'useReducer', 'Tailwind CSS'],
        githubUrl: 'https://github.com/jhoracio19',
      },
      {
        id: 'guitarla-react',
        title: 'GuitarLA',
        description: isEn
          ? 'E-commerce and shopping cart application developed with React and TypeScript. Implements clean architecture with Custom Hooks, data persistence, and dynamic business logic.'
          : 'Aplicación de e-commerce y carrito de compras desarrollada con React y TypeScript. Implementa arquitectura limpia con Custom Hooks, persistencia de datos y lógica de negocio dinámica.',
        image: 'assets/flowcard.png', 
        technologies: ['React.js', 'TypeScript', 'Custom Hooks'],
        githubUrl: 'https://github.com/jhoracio19',
      },
      {
        id: 'restaurant-calculator',
        title: 'Restaurant Order Calculator',
        description: isEn
          ? 'Interactive application for consumption management and dynamic tip calculation. Demonstrates advanced use of Custom Hooks, conditional rendering, derived state with useMemo, and responsive UI design with Tailwind CSS.'
          : 'Aplicación interactiva para la gestión de consumos y cálculo dinámico de propinas. Demuestra el uso avanzado de Custom Hooks, renderizado condicional, estado derivado con useMemo y diseño UI responsive con Tailwind CSS.',
        image: 'assets/flowcard.png', 
        technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'useMemo'],
        githubUrl: 'https://github.com/jhoracio19',
      },
      {
        id: 'proyecto-extra-1',
        title: isEn ? 'Weather Explorer' : 'Explorador de Clima',
        description: isEn
          ? 'A simple yet powerful tool to check global weather in real-time.'
          : 'Una herramienta sencilla pero potente para consultar el clima mundial en tiempo real.',
        image: 'assets/flowcard.png',
        technologies: ['JavaScript', 'API Rest'],
        githubUrl: 'https://github.com/jhoracio19',
      },
    ];
  });

  getProjects() {
    return this.projectsData;
  }

  getFeaturedProjects() {
    return computed(() => this.projectsData().slice(0, 4));
  }
}
