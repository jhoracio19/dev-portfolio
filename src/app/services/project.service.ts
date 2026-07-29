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
        category: 'platforms',
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
        category: 'experiments',
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
        category: 'platforms',
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
        category: 'experiments',
        githubUrl: 'https://github.com/jhoracio19/hanging',
        demoUrl: 'https://minigamejh.netlify.app/',
      },
      {
        id: 'calorie-tracker',
        title: 'Calorie Tracker',
        description: isEn
          ? 'Calorie and exercise counter designed for daily health tracking. Allows categorizing activities, calculating caloric balances, and editing records. Built with a robust architecture based on useReducer to ensure data scalability and predictability.'
          : 'Contador de calorías y ejercicios diseñado para el seguimiento diario de la salud. Permite categorizar actividades, calcular balances calóricos y editar registros existentes. Construido con una arquitectura robusta basada en useReducer para garantizar la escalabilidad y predictibilidad de los datos.',
        image: 'assets/proyects/calorie-tracker.png',
        technologies: ['React.js', 'TypeScript', 'useReducer', 'Tailwind CSS'],
        category: 'tools',
        githubUrl: 'https://github.com/jhoracio19/calorie-tracker.git',
        demoUrl: 'https://calorie-tracker-jh.netlify.app/'
      },
      {
        id: 'guitarla-react',
        title: 'GuitarLA',
        description: isEn
          ? 'E-commerce and shopping cart application developed with React and TypeScript. Implements clean architecture with Custom Hooks, data persistence, and dynamic business logic.'
          : 'Aplicación de e-commerce y carrito de compras desarrollada con React y TypeScript. Implementa arquitectura limpia con Custom Hooks, persistencia de datos y lógica de negocio dinámica.',
        image: 'assets/proyects/guitarla.png',
        technologies: ['React.js', 'TypeScript', 'Custom Hooks'],
        category: 'tools',
        githubUrl: 'https://github.com/jhoracio19/guitarla-react-ts.git',
        demoUrl: 'https://guitarla-sho.netlify.app/'
      },
      {
        id: 'restaurant-calculator',
        title: 'Restaurant Order Calculator',
        description: isEn
          ? 'Interactive application for consumption management and dynamic tip calculation. Demonstrates advanced use of Custom Hooks, conditional rendering, derived state with useMemo, and responsive UI design with Tailwind CSS.'
          : 'Aplicación interactiva para la gestión de consumos y cálculo dinámico de propinas. Demuestra el uso avanzado de Custom Hooks, renderizado condicional, estado derivado con useMemo y diseño UI responsive con Tailwind CSS.',
        image: 'assets/proyects/restaurant-order.png',
        technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'useMemo'],
        category: 'tools',
        githubUrl: 'https://github.com/jhoracio19/restaurant-order-calculator.git',
        demoUrl: 'https://calculator-tips-jh.netlify.app/'
      },
      {
        id: 'skycast',
        title: 'SkyCast',
        description: isEn
          ? 'An application that fetches real-time weather data for any city in the world. Consumes a public weather API while handling loading and error states for a smooth experience.'
          : 'Aplicación que consulta el clima en tiempo real de cualquier ciudad del mundo. Consume una API pública de clima y gestiona estados de carga y error para una experiencia fluida.',
        image: 'assets/proyects/buscador_clima.png',
        technologies: ['React.js', 'JavaScript', 'CSS3'],
        category: 'experiments',
        githubUrl: 'https://github.com/jhoracio19/SkyCast.git',
        demoUrl: 'https://weather-jh.netlify.app/',
      },
      {
        id: 'frontend-store',
        title: 'FrontendStore',
        description: isEn
          ? 'Online merch store for frontend developers. Features a product catalog, section-based navigation, and a functional shopping cart.'
          : 'Tienda en línea de merchandising para developers frontend. Catálogo de productos, navegación por secciones y carrito de compras funcional.',
        image: 'assets/proyects/frontend-store.png',
        technologies: ['React.js', 'JavaScript', 'CSS3'],
        category: 'tools',
        githubUrl: 'https://github.com/jhoracio19/frontend-store.git',
        demoUrl: 'https://frontend-store-jh.netlify.app/',
      },
      {
        id: 'gastotrack',
        title: 'GastoTrack',
        description: isEn
          ? 'A personal budgeting tool with a circular progress indicator to visually track spending. Lets you filter expenses by category and reset the budget.'
          : 'Herramienta de presupuesto personal con seguimiento visual del gasto mediante un indicador circular. Permite filtrar gastos por categoría y reiniciar el presupuesto.',
        image: 'assets/proyects/planificador_gastos.png',
        technologies: ['React.js', 'JavaScript', 'CSS3'],
        category: 'tools',
        githubUrl: 'https://github.com/jhoracio19/budget-planner-app.git',
        demoUrl: 'https://manage-cash-jh.netlify.app/',
      },
      {
        id: 'vettrack',
        title: 'VetTrack',
        description: isEn
          ? 'A CRUD system for managing veterinary clinic patients. Lets you register pets, owners, symptoms, and admission dates, with global state managed using Zustand.'
          : 'Sistema CRUD para la gestión de pacientes de una clínica veterinaria. Permite registrar mascotas, propietarios, síntomas y fecha de alta, gestionando el estado global de la aplicación con Zustand.',
        image: 'assets/proyects/pacientes-veterinaria.png',
        technologies: ['React.js', 'Zustand', 'JavaScript'],
        category: 'tools',
        githubUrl: 'https://github.com/jhoracio19/Pacientes-Zustand.git',
        demoUrl: 'https://pacientes-jh.netlify.app/',
      },
      {
        id: 'techno-edm-festival',
        title: 'Techno & EDM Festival',
        description: isEn
          ? 'A landing page for an electronic music festival. Includes lineup, gallery, and ticket sections with an immersive visual design.'
          : 'Landing page para un festival de música electrónica. Incluye secciones de lineup, galería y venta de boletos con un diseño visual inmersivo.',
        image: 'assets/proyects/techno.png',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        category: 'experiments',
        githubUrl: 'https://github.com/jhoracio19/Techno-EDM-Festival.git',
        demoUrl: 'https://techno-jh.netlify.app/',
      },
      {
        id: 'blog-de-cafe',
        title: 'BlogDeCafé',
        description: isEn
          ? 'A landing page for a coffee blog, featuring articles, courses, and workshops to learn brewing techniques.'
          : 'Landing page de un blog especializado en café, con artículos, cursos y talleres para aprender técnicas de preparación.',
        image: 'assets/proyects/mi-blog-cafe.png',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        category: 'experiments',
        githubUrl: 'https://github.com/jhoracio19/BlogCafe.git',
        demoUrl: 'https://my-coffe-blog-personal.netlify.app/',
      },
    ];
  });

  private categoryOrder: Project['category'][] = ['platforms', 'tools', 'experiments'];

  getProjects() {
    return this.projectsData;
  }

  getFeaturedProjects() {
    return computed(() => {
      const all = this.projectsData();
      const featured: Project[] = [];

      for (const category of this.categoryOrder) {
        const firstInCategory = all.find((p) => p.category === category);
        if (firstInCategory) featured.push(firstInCategory);
      }

      for (const project of all) {
        if (featured.length >= 4) break;
        if (!featured.includes(project)) featured.push(project);
      }

      return featured;
    });
  }
}
