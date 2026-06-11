import { Injectable, signal, computed } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLang = signal<Language>('es');

  translations = {
    es: {
      nav: {
        home: 'Inicio',
        experience: 'Experiencia',
        hackathons: 'Hackathones',
        projects: 'Proyectos',
        tech: 'Tecnologías',
        about: 'Sobre mí',
      },
      hero: {
        available: 'Disponible para proyectos',
        title_prefix: 'Hola, soy',
        subtitle: 'Construyo soluciones digitales con propósito',
        description_1: 'Me apasiona transformar ideas complejas en productos que la gente realmente disfruta usar.',
        description_2: 'Como Ingeniero en TI, combino el rigor técnico con una visión de negocio para crear',
        description_2_bold: 'software que resuelve problemas reales',
        description_2_suffix: '. Un commit a la vez, ayudo a startups y empresas a escalar sus visiones.',
        tag_exp: '+2 años creando código',
        tag_arch: 'Arquitectura con Alma',
        tag_ux: 'Enfoque en el Usuario',
        cta_idea: '¿Tienes una idea? Hablemos',
        cta_cv: 'Descargar CV',
      },
      about: {
        title: 'Detrás del código',
        p1: 'Soy José Horacio. Mientras curso mi ingeniería en la BUAP, dedico mis días a explorar cómo el software puede simplificar la vida de las personas. Mi camino en la tecnología no se trata solo de escribir líneas de código, sino de entender los desafíos que enfrentan los negocios y resolverlos con ingeniería creativa.',
        p2: 'Al dirigir mi propia agencia, aprendí que una solución técnica solo es buena si es útil. Por eso, mi enfoque siempre está en el equilibrio: crear sistemas robustos por dentro y experiencias amigables por fuera. Soy un eterno aprendiz, siempre buscando la próxima certificación o el próximo reto que me obligue a pensar fuera de la caja.',
        card_passion: 'Pasión y Liderazgo',
        card_passion_desc: 'Me gusta liderar con el ejemplo, diseñar arquitecturas que faciliten el trabajo del equipo y comunicar ideas técnicas de forma que todos las entiendan.',
        card_edu: 'Formación',
        edu_ing: 'Ingeniería en TI (BUAP) – 7mo Semestre',
        edu_eng: 'Inglés Profesional (Tec de Monterrey)',
        cert_title: 'Certificaciones',
        arch_title: 'Enfoque de Arquitectura',
        arch_p: 'Más allá del código, mi prioridad actual es el diseño de sistemas escalables utilizando principios avanzados de ingeniería de software.',
      },
      experience: {
        title: 'Mi Camino Profesional',
        socialler: {
          title: 'Liderando el MVP — Socialler',
          date: 'Abril 2026 — Actualidad',
          desc: 'Actualmente tengo el reto de dar vida al MVP de Socialler. Estoy implementando una Arquitectura Hexagonal para asegurar que el proyecto no solo funcione hoy, sino que sea fácil de mantener y escalar mañana. Es un entorno dinámico donde cada decisión técnica cuenta para el éxito de la startup.',
        },
        basil: {
          title: 'Soporte Frontend — Basil Soluciones',
          date: 'Enero 2026 — Febrero 2026',
          desc: 'Colaboré en la optimización de plataformas corporativas, enfrentándome a bugs críticos en producción y mejorando la interfaz para que los usuarios finales tuvieran una experiencia más fluida.',
        }
      },
      hackathons: {
        title: 'Hackathones & Retos',
        project: 'Proyecto:',
        view_cert: 'Ver Certificado',
        view_repo: 'Código del Proyecto',
      },
      projects: {
        title: 'Proyectos Relevantes',
        cta_all: 'Ver todos los proyectos',
        filter_all: 'Todos',
        catalog_title: 'Catálogo Completo',
        catalog_desc: 'Explora todas mis creaciones y experimentos.',
        back_home: 'Volver al inicio',
      },
      tech: {
        title: 'Stack Tecnológico',
        desc: 'Ecosistema de herramientas que domino para construir soluciones SaaS robustas y modernas.',
      },
      contact: {
        copy_email: 'Copiar Email',
        email_copied: '¡Email copiado!',
      }
    },
    en: {
      nav: {
        home: 'Home',
        experience: 'Experience',
        hackathons: 'Hackathons',
        projects: 'Projects',
        tech: 'Tech Stack',
        about: 'About Me',
      },
      hero: {
        available: 'Available for projects',
        title_prefix: "Hi, I'm",
        subtitle: 'I build digital solutions with purpose',
        description_1: 'I am passionate about transforming complex ideas into products that people truly enjoy using.',
        description_2: 'As an IT Engineer, I combine technical rigor with a business vision to create',
        description_2_bold: 'software that solves real problems',
        description_2_suffix: '. One commit at a time, I help startups and companies scale their visions.',
        tag_exp: '+2 years creating code',
        tag_arch: 'Architecture with Soul',
        tag_ux: 'User-Centric Approach',
        cta_idea: "Got an idea? Let's talk",
        cta_cv: 'Download CV',
      },
      about: {
        title: 'Behind the code',
        p1: "I'm José Horacio. While pursuing my engineering degree at BUAP, I spend my days exploring how software can simplify people's lives. My path in technology isn't just about writing lines of code, but about understanding the challenges businesses face and solving them with creative engineering.",
        p2: "By running my own agency, I learned that a technical solution is only good if it's useful. That's why my focus is always on balance: building robust systems on the inside and user-friendly experiences on the outside. I am a lifelong learner, always looking for the next certification or challenge that forces me to think outside the box.",
        card_passion: 'Passion & Leadership',
        card_passion_desc: 'I like to lead by example, design architectures that facilitate the team\'s work, and communicate technical ideas so everyone understands them.',
        card_edu: 'Education',
        edu_ing: 'IT Engineering (BUAP) – 7th Semester',
        edu_eng: 'Professional English (Tec de Monterrey)',
        cert_title: 'Certifications',
        arch_title: 'Architecture Focus',
        arch_p: 'Beyond code, my current priority is designing scalable systems using advanced software engineering principles.',
      },
      experience: {
        title: 'My Professional Path',
        socialler: {
          title: 'Leading the MVP — Socialler',
          date: 'April 2026 — Present',
          desc: 'I currently have the challenge of bringing Socialler\'s MVP to life. I am implementing a Hexagonal Architecture to ensure the project not only works today but is easy to maintain and scale tomorrow. It is a dynamic environment where every technical decision counts for the startup\'s success.',
        },
        basil: {
          title: 'Frontend Support — Basil Soluciones',
          date: 'January 2026 — February 2026',
          desc: 'Collaborated on the optimization of corporate platforms, facing critical bugs in production and improving the interface for a smoother end-user experience.',
        }
      },
      hackathons: {
        title: 'Hackathons & Challenges',
        project: 'Project:',
        view_cert: 'View Certificate',
        view_repo: 'Project Code',
      },
      projects: {
        title: 'Relevant Projects',
        cta_all: 'View all projects',
        filter_all: 'All',
        catalog_title: 'Full Catalog',
        catalog_desc: 'Explore all my creations and experiments.',
        back_home: 'Back to home',
      },
      tech: {
        title: 'Tech Stack',
        desc: 'Ecosystem of tools I master to build robust and modern SaaS solutions.',
      },
      contact: {
        copy_email: 'Copy Email',
        email_copied: 'Email copied!',
      }
    },
  };

  current = computed(() => this.translations[this.currentLang()]);
  lang = computed(() => this.currentLang());

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
  }

  toggleLanguage() {
    this.currentLang.update((l) => (l === 'es' ? 'en' : 'es'));
  }
}
