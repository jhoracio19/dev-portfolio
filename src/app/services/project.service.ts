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
        image: 'assets/flowcard.webp',
        technologies: ['Django', 'PostgreSQL', 'Python'],
        category: 'platforms',
      },
      {
        id: 'gifapp',
        title: 'GifApp',
        description: isEn
          ? 'My interpretation of reactive search. A fast and fluid application demonstrating the power of reactive services in Angular.'
          : 'Mi interpretación de una búsqueda reactiva. Una aplicación rápida y fluida que demuestra el poder de los servicios reactivos en Angular.',
        image: 'assets/gifapp.webp',
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
        image: 'assets/devilearn.webp',
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
        image: 'assets/minijuego.webp',
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
        image: 'assets/proyects/calorie-tracker.webp',
        technologies: ['React.js', 'TypeScript', 'useReducer', 'Tailwind CSS'],
        category: 'tools',
        githubUrl: 'https://github.com/jhoracio19/calorie-tracker.git',
        demoUrl: 'https://calorie-tracker-jh.netlify.app/',
      },
      {
        id: 'guitarla-react',
        title: 'GuitarLA',
        description: isEn
          ? 'E-commerce and shopping cart application developed with React and TypeScript. Implements clean architecture with Custom Hooks, data persistence, and dynamic business logic.'
          : 'Aplicación de e-commerce y carrito de compras desarrollada con React y TypeScript. Implementa arquitectura limpia con Custom Hooks, persistencia de datos y lógica de negocio dinámica.',
        image: 'assets/proyects/guitarla.webp',
        technologies: ['React.js', 'TypeScript', 'Custom Hooks'],
        category: 'tools',
        githubUrl: 'https://github.com/jhoracio19/guitarla-react-ts.git',
        demoUrl: 'https://guitarla-sho.netlify.app/',
      },
      {
        id: 'restaurant-calculator',
        title: 'Restaurant Order Calculator',
        description: isEn
          ? 'Interactive application for consumption management and dynamic tip calculation. Demonstrates advanced use of Custom Hooks, conditional rendering, derived state with useMemo, and responsive UI design with Tailwind CSS.'
          : 'Aplicación interactiva para la gestión de consumos y cálculo dinámico de propinas. Demuestra el uso avanzado de Custom Hooks, renderizado condicional, estado derivado con useMemo y diseño UI responsive con Tailwind CSS.',
        image: 'assets/proyects/restaurant-order.webp',
        technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'useMemo'],
        category: 'tools',
        githubUrl: 'https://github.com/jhoracio19/restaurant-order-calculator.git',
        demoUrl: 'https://calculator-tips-jh.netlify.app/',
      },
      {
        id: 'skycast',
        title: 'SkyCast',
        description: isEn
          ? 'An application that fetches real-time weather data for any city in the world. Consumes a public weather API while handling loading and error states for a smooth experience.'
          : 'Aplicación que consulta el clima en tiempo real de cualquier ciudad del mundo. Consume una API pública de clima y gestiona estados de carga y error para una experiencia fluida.',
        image: 'assets/proyects/buscador_clima.webp',
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
        image: 'assets/proyects/frontend-store.webp',
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
        image: 'assets/proyects/planificador_gastos.webp',
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
        image: 'assets/proyects/pacientes-veterinaria.webp',
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
        image: 'assets/proyects/techno.webp',
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
        image: 'assets/proyects/mi-blog-cafe.webp',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        category: 'experiments',
        githubUrl: 'https://github.com/jhoracio19/BlogCafe.git',
        demoUrl: 'https://my-coffe-blog-personal.netlify.app/',
      },
      {
        id: 'barberbook',
        title: 'BarberBook',
        description: isEn
          ? 'An appointment management system for a barbershop, built with an MVC architecture in PHP. Lets clients pick services, schedule appointments, and review a summary before confirming.'
          : 'Sistema de gestión de citas para una barbería, desarrollado con arquitectura MVC en PHP. Permite a los clientes elegir servicios, agendar citas y consultar un resumen antes de confirmar.',
        image: 'assets/proyects/barberia.webp',
        technologies: ['PHP', 'MVC', 'MySQL'],
        category: 'platforms',
        githubUrl: 'https://github.com/jhoracio19/AppSalon_mvc.git',
      },
      {
        id: 'bienes-raices',
        title: 'BienesRaíces',
        description: isEn
          ? 'A real estate platform for listing and selling luxury houses and apartments, built with an MVC architecture in PHP. Includes a blog, listings, and a contact section.'
          : 'Plataforma de bienes raíces para la publicación y venta de casas y departamentos de lujo, desarrollada con arquitectura MVC en PHP. Incluye blog, anuncios y sección de contacto.',
        image: 'assets/proyects/bienes_raices.webp',
        technologies: ['PHP', 'MVC', 'MySQL'],
        category: 'platforms',
        githubUrl: 'https://github.com/jhoracio19/bienesRaicesMVC.git',
      },
      {
        id: 'remindhome',
        title: 'RemindHome',
        description: isEn
          ? 'A shared household app that tracks fridge items and recurring chores. Notifies everyone in the home before food expires or a task is due, with real-time updates across all members.'
          : 'Aplicación compartida para el hogar que registra lo que hay en el refrigerador y las tareas que se repiten. Avisa a todos los de la casa antes de que algo se eche a perder o se les pase una tarea, con actualizaciones en tiempo real.',
        image: 'assets/proyects/remindhome.webp',
        technologies: ['Next.js', 'TypeScript', 'Supabase'],
        category: 'clients',
        githubUrl: 'https://github.com/jhoracio19/home-mvp.git',
        demoUrl: 'https://remindhome.app/',
      },
      {
        id: 'otorrino-tlaxcala',
        title: 'Otorrino Tlaxcala',
        description: isEn
          ? 'A professional website for an ENT specialist in Tlaxcala. Includes service details, testimonials, a before-and-after gallery, and an appointment booking system.'
          : 'Sitio web profesional para un otorrinolaringólogo en Tlaxcala. Incluye información de servicios, testimonios, galería de antes y después, y un sistema de agendado de citas.',
        image: 'assets/proyects/otorrinotlaxcala.webp',
        technologies: ['Angular', 'TypeScript'],
        category: 'clients',
        githubUrl: 'https://github.com/jhoracio19/dr-roberto-herrera-site.git',
        demoUrl: 'https://otorrinotlaxcala.com/',
      },
      {
        id: 'cabana-maria-maria',
        title: 'Cabaña María María',
        description: isEn
          ? 'A website for an event venue and garden in Tlaxcala. Features a package quote calculator, gallery, FAQ, and direct WhatsApp contact.'
          : 'Sitio web para un salón de eventos y jardín en Tlaxcala. Cuenta con cotizador de paquetes, galería, preguntas frecuentes y contacto directo por WhatsApp.',
        image: 'assets/proyects/cabanamariamaria.webp',
        technologies: ['Next.js', 'React', 'TypeScript'],
        category: 'clients',
        githubUrl: 'https://github.com/jhoracio19/cabanamariamaria.git',
        demoUrl: 'https://cabanamariamaria.com/',
      },
    ];
  });

  getProjects() {
    return this.projectsData;
  }

  getFeaturedProjects() {
    const selectedIds = ['remindhome', 'otorrino-tlaxcala', 'cabana-maria-maria'];
    return computed(() =>
      selectedIds.flatMap((id) => {
        const project = this.projectsData().find((project) => project.id === id);
        return project ? [project] : [];
      }),
    );
  }
}
