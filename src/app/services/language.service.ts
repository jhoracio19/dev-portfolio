import { DOCUMENT } from '@angular/common';
import { Injectable, signal, computed, inject, effect } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLang = signal<Language>('es');
  private document = inject(DOCUMENT);

  constructor() {
    effect(() => (this.document.documentElement.lang = this.currentLang()));
  }

  translations = {
    es: {
      design: {
        role: 'Desarrollador web y móvil',
        experienceSummary: '+{years} {unit} de experiencia',
        experienceYear: 'año',
        experienceYears: 'años',
        headline: 'Desarrollo aplicaciones web y móviles, de la idea al producto.',
        intro:
          'Soy desarrollador fullstack y estudiante de Ingeniería en TI en la BUAP. Desarrollo productos web y aplicaciones móviles con React Native y Expo, y dirijo JH Dev Agency.',
        viewWork: 'Ver mi trabajo',
        talk: 'Hablemos',
        previewLabel: 'Conocer el proyecto RemindHome',
        selectedProduct: 'Producto seleccionado',
        productCaption: 'Menos pendientes. Más vida en casa.',
        achievement: '3.er lugar entre 25 equipos',
        hackMtyAchievement: '2.º lugar · Capital One',
        hackMtyInfoLabel: 'Acerca de HackMTY',
        hackMtyInfo: 'HackMTY es uno de los hackathones estudiantiles más grandes de Latinoamérica. Organizado por TEC ACM en el Tecnológico de Monterrey, reúne equipos para construir soluciones en 36 horas.',
        seeChallenge: 'Conocer el reto',
        selectedWork: 'Trabajo seleccionado',
        workIntro: 'Productos y sitios publicados, con un problema concreto detrás.',
        liveSite: 'Visitar sitio',
        code: 'Ver código',
        newTab: 'abre en una pestaña nueva',
        caseStudy: 'Explorar el proyecto',
        challenge: 'El problema',
        implementation: 'La implementación',
        result: 'El resultado',
        sociallerIntro: 'Desarrollo web con Next.js y TypeScript, y desarrollo móvil con Expo en Socialler.',
        contributions: [
          'Migración de autenticación OIDC de NextAuth a Logto, manteniendo el flujo completo funcionando e integrado con el backend anterior y el nuevo.',
          'Desarrollo de funcionalidades y resolución de bugs en la aplicación móvil con Expo.',
          'Construcción de interfaces y componentes reutilizables para la versión web.',
          'Mejoras de seguridad y refactorización para mantener el código y reducir deuda técnica.',
          'Formularios de autenticación y registro con React Hook Form y Zod.',
        ],
        stackIntro: 'Las herramientas con las que desarrollo mis proyectos.',
        workflow: 'Entrega y herramientas',
        aboutIntro:
          'Soy José Horacio, desarrollador fullstack enfocado en aplicaciones web y móviles, y estudiante de Ingeniería en TI en la BUAP.',
        aboutBody:
          'Dirijo JH Dev Agency y desarrollo productos web y aplicaciones móviles con React Native y Expo. Mi experiencia incluye desarrollo frontend en Basil Soluciones y trabajo web y móvil en Socialler, con atención a la experiencia de uso y la calidad del código.',
        personalNotes: [
          { title: 'Escuchar y convertir ideas en productos', body: 'En JH Dev Agency, el trabajo con clientes parte de entender qué necesitan y traducirlo en una solución clara. Construyo interfaces web y funcionalidades móviles para tareas concretas, como organizar un hogar con RemindHome, agendar consultas o cotizar eventos.' },
          { title: 'Resolver problemas y adaptarme', body: 'En Socialler combiné desarrollo de funcionalidades y resolución de bugs móviles con Expo, mejoras de seguridad y refactorización. La migración OIDC de NextAuth a Logto me exigió comprender e integrar el backend anterior y el nuevo para mantener funcionando el flujo completo.' },
          { title: 'Pensar más allá de un solo usuario', body: 'Una aplicación debe responder a muchas personas al mismo tiempo. Mi enfoque en cómputo distribuido considera la concurrencia, la consistencia de los datos y la comunicación entre servicios: qué pasa cuando dos usuarios modifican la misma información, una petición se repite o un servicio falla. Me interesa diseñar sistemas que puedan crecer sin perder confiabilidad.' },
          { title: 'Construir en equipo, contra reloj', body: 'Los hackathones me han permitido practicar la colaboración y priorizar bajo presión. Con Stackly construimos un simulador financiero para pymes en 36 horas y obtuvimos el segundo lugar en el reto de Capital One en HackMTY 2026. Con Verdana Loop logramos el tercer lugar entre 25 equipos en Industry Hack Tec.' },
        ],
        programming: 'Principios de programación',
        architecture:
          'Mi enfoque combina arquitectura hexagonal, Clean Code, SOLID e integración de APIs con fundamentos de cómputo distribuido: concurrencia, mensajería asíncrona y consistencia de datos.',
        hackIntro: 'Trabajo en equipo, restricciones reales y soluciones construidas contra reloj.',
        contactTitle: 'Hablemos de tu próximo proyecto.',
        contactIntro:
          'Cuéntame qué necesitas construir o sobre la oportunidad que tienes en mente.',
        sendEmail: 'Enviar correo',
        copyFailed: 'No se pudo copiar. Puedes seleccionar el correo o usar Enviar correo.',
        skip: 'Saltar al contenido',
        contact: 'Contacto',
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
        navigation: 'Navegación principal',
      },
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
        description_1:
          'Me apasiona transformar ideas complejas en productos que la gente realmente disfruta usar.',
        description_2:
          'Como estudiante de Ingeniería en TI, combino el rigor técnico con una visión de negocio para crear',
        description_2_bold: 'software que resuelve problemas reales',
        description_2_suffix:
          '. Un commit a la vez, ayudo a startups y empresas a escalar sus visiones.',
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
        agency_cta: 'Dirijo JH Dev Agency',
        card_passion: 'Pasión y Liderazgo',
        card_passion_desc:
          'Me gusta liderar con el ejemplo, diseñar arquitecturas que faciliten el trabajo del equipo y comunicar ideas técnicas de forma que todos las entiendan.',
        card_edu: 'Formación',
        edu_ing: 'Ingeniería en TI (BUAP) – 8vo Semestre',
        edu_eng: 'Inglés Profesional (Tec de Monterrey)',
        cert_title: 'Certificaciones',
        arch_title: 'Enfoque de Arquitectura',
        arch_p:
          'Más allá del código, mi prioridad actual es el diseño de sistemas escalables utilizando principios avanzados de ingeniería de software.',
      },
      experience: {
        title: 'Mi Camino Profesional',
        socialler: {
          title: 'Desarrollador Web y Móvil — Socialler',
          date: 'Abril 2026 — Octubre 2026',
          desc: 'En Socialler, participé en la construcción, optimización y seguridad de la plataforma web con Next.js y TypeScript, y en el desarrollo de funcionalidades y resolución de bugs de la aplicación móvil con Expo.',
          achievements: [
            'Migración de autenticación OIDC de NextAuth a Logto, manteniendo el flujo completo funcionando e integrado con el backend anterior y el nuevo.',
            'Desarrollo móvil con Expo: Implementación de funcionalidades y resolución de bugs en la aplicación móvil.',
            'Construcción de la plataforma: Desarrollo de la versión web de la red social desde cero.',
            'Ciberseguridad Frontend y Backend: Implementación de políticas de seguridad (CSP, HSTS) y mitigación de vulnerabilidades críticas, incluyendo prevención de Cross-Site Scripting (XSS) y protección contra ataques de Path Traversal en integraciones con buckets de AWS S3.',
            "Arquitectura y Refactorización: Reducción sistemática de la deuda técnica mediante la aplicación de principios DRY (Don't Repeat Yourself), creación de componentes de UI reutilizables y eliminación de código muerto (Dead Code), mejorando el tiempo de carga y la mantenibilidad del proyecto.",
            'Optimización de Formularios y Flujos: Desarrollo y validación de formularios complejos de autenticación y registro de usuarios utilizando React Hook Form y Zod, asegurando una experiencia de usuario fluida y libre de errores.',
          ],
        },
        basil: {
          title: 'Desarrollador Web Frontend — Basil Soluciones',
          date: 'Enero 2025 — Febrero 2026',
          desc: 'Participé en el desarrollo y mejora del frontend de plataformas corporativas, implementando funcionalidades y ajustes de interfaz. Resolví bugs en producción y optimicé la experiencia de navegación, contribuyendo al mantenimiento y la evolución de las aplicaciones web.',
        },
      },
      hackathons: {
        linkedin_post: 'Ver publicación en LinkedIn (abre en una pestaña nueva)',
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
        categories: {
          clients: 'Proyectos para Clientes',
          platforms: 'Plataformas & SaaS',
          tools: 'Herramientas & E-commerce',
          experiments: 'Experimentos Frontend',
        },
      },
      tech: {
        title: 'Stack Tecnológico',
        desc: 'Ecosistema de herramientas que domino para construir soluciones SaaS robustas y modernas.',
      },
      contact: {
        copy_email: 'Copiar Email',
        email_copied: '¡Email copiado!',
        agency_cta: '¿Buscas un equipo para tu proyecto? Conoce JH Dev Agency',
      },
    },
    en: {
      design: {
        role: 'Web & mobile developer',
        experienceSummary: '+{years} {unit} of experience',
        experienceYear: 'year',
        experienceYears: 'years',
        headline: 'I build web and mobile applications, from idea to product.',
        intro: 'I’m a fullstack developer and IT Engineering student at BUAP. I build web products and mobile apps with React Native and Expo, and run JH Dev Agency.',
        viewWork: 'View my work',
        talk: 'Let’s talk',
        previewLabel: 'Explore the RemindHome project',
        selectedProduct: 'Selected product',
        productCaption: 'Fewer chores. More life at home.',
        achievement: '3rd place out of 25 teams',
        hackMtyAchievement: '2nd place · Capital One',
        hackMtyInfoLabel: 'About HackMTY',
        hackMtyInfo: 'HackMTY is one of Latin America’s largest student hackathons. Organized by TEC ACM at Tecnológico de Monterrey, it brings teams together to build solutions in 36 hours.',
        seeChallenge: 'Explore the challenge',
        selectedWork: 'Selected work',
        workIntro: 'Published products and websites, each solving a specific problem.',
        liveSite: 'Visit website',
        code: 'View code',
        newTab: 'opens in a new tab',
        caseStudy: 'Explore the project',
        challenge: 'The problem',
        implementation: 'The implementation',
        result: 'The result',
        sociallerIntro: 'Web development with Next.js and TypeScript, and mobile development with Expo at Socialler.',
        contributions: [
          'Migrated OIDC authentication from NextAuth to Logto, keeping the complete flow working and integrated with both the legacy and new backends.',
          'Developed features and fixed bugs in the mobile application with Expo.',
          'Building interfaces and reusable components for the web platform.',
          'Security improvements and refactoring to maintain the code and reduce technical debt.',
          'Authentication and registration forms with React Hook Form and Zod.',
        ],
        stackIntro: 'The tools I use to build my projects.',
        workflow: 'Delivery and tools',
        aboutIntro: 'I’m José Horacio, a fullstack developer focused on web and mobile applications, and an IT Engineering student at BUAP.',
        aboutBody:
          'I run JH Dev Agency and build web products and mobile apps with React Native and Expo. My experience includes frontend development at Basil Soluciones and web and mobile work at Socialler, with a focus on user experience and code quality.',
        personalNotes: [
          { title: 'Listening and turning ideas into products', body: 'At JH Dev Agency, working with clients starts with understanding their needs and translating them into a clear solution. I build web interfaces and mobile features for everyday tasks, such as organizing a household with RemindHome, booking appointments, or estimating event costs.' },
          { title: 'Solving problems and adapting', body: 'At Socialler, I combined mobile feature development and bug fixes with Expo, security improvements, and refactoring. Migrating OIDC authentication from NextAuth to Logto required understanding and integrating both the legacy and new backends to keep the complete flow working.' },
          { title: 'Thinking beyond a single user', body: 'An application needs to serve many people at the same time. My approach to distributed computing considers concurrency, data consistency, and communication between services: what happens when two users change the same information, a request is repeated, or a service fails. I aim to design systems that can grow while remaining reliable.' },
          { title: 'Building together, against the clock', body: 'Hackathons have given me opportunities to practice collaboration and prioritize under pressure. With Stackly, we built a financial simulator for SMEs in 36 hours and placed second in the Capital One track at HackMTY 2026. With Verdana Loop, we placed third out of 25 teams at Industry Hack Tec.' },
        ],
        programming: 'Programming principles',
        architecture:
          'My approach combines hexagonal architecture, Clean Code, SOLID, and API integration with distributed computing fundamentals: concurrency, asynchronous messaging, and data consistency.',
        hackIntro: 'Teamwork, real constraints and solutions built against the clock.',
        contactTitle: 'Let’s talk about your next project.',
        contactIntro: 'Tell me what you need to build or about the opportunity you have in mind.',
        sendEmail: 'Send email',
        copyFailed: 'Could not copy. Select the email address or use Send email.',
        skip: 'Skip to content',
        contact: 'Contact',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        navigation: 'Main navigation',
      },
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
        description_1:
          'I am passionate about transforming complex ideas into products that people truly enjoy using.',
        description_2:
          'As an IT Engineering student, I combine technical rigor with a business vision to create',
        description_2_bold: 'software that solves real problems',
        description_2_suffix:
          '. One commit at a time, I help startups and companies scale their visions.',
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
        agency_cta: 'I run JH Dev Agency',
        card_passion: 'Passion & Leadership',
        card_passion_desc:
          "I like to lead by example, design architectures that facilitate the team's work, and communicate technical ideas so everyone understands them.",
        card_edu: 'Education',
        edu_ing: 'IT Engineering (BUAP) – 8th Semester',
        edu_eng: 'Professional English (Tec de Monterrey)',
        cert_title: 'Certifications',
        arch_title: 'Architecture Focus',
        arch_p:
          'Beyond code, my current priority is designing scalable systems using advanced software engineering principles.',
      },
      experience: {
        title: 'My Professional Path',
        socialler: {
          title: 'Web & Mobile Developer — Socialler',
          date: 'April 2026 — October 2026',
          desc: "At Socialler, I contributed to building, optimizing, and securing the web platform with Next.js and TypeScript, and developed features and fixed bugs in the mobile application with Expo.",
          achievements: [
            'Migrated OIDC authentication from NextAuth to Logto, keeping the complete flow working and integrated with both the legacy and new backends.',
            'Mobile Development with Expo: Implemented features and fixed bugs in the mobile application.',
            'Platform Development: Built the web version of the social network from scratch.',
            'Frontend & Backend Security: Implemented security policies (CSP, HSTS) and mitigated critical vulnerabilities, including Cross-Site Scripting (XSS) prevention and protection against Path Traversal attacks in AWS S3 bucket integrations.',
            "Architecture & Refactoring: Systematically reduced technical debt by applying DRY (Don't Repeat Yourself) principles, building reusable UI components, and removing dead code — improving load time and project maintainability.",
            'Forms & Flow Optimization: Developed and validated complex authentication and registration forms using React Hook Form and Zod, ensuring a smooth, error-free user experience.',
          ],
        },
        basil: {
          title: 'Frontend Web Developer — Basil Soluciones',
          date: 'January 2025 — February 2026',
          desc: 'Contributed to frontend development and improvements across corporate platforms, implementing features and interface updates. Fixed production bugs and improved the navigation experience, supporting the maintenance and ongoing development of web applications.',
        },
      },
      hackathons: {
        linkedin_post: 'View LinkedIn post (opens in a new tab)',
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
        categories: {
          clients: 'Client Projects',
          platforms: 'Platforms & SaaS',
          tools: 'Tools & E-commerce',
          experiments: 'Frontend Experiments',
        },
      },
      tech: {
        title: 'Tech Stack',
        desc: 'Ecosystem of tools I master to build robust and modern SaaS solutions.',
      },
      contact: {
        copy_email: 'Copy Email',
        email_copied: 'Email copied!',
        agency_cta: 'Looking for a team for your project? Check out JH Dev Agency',
      },
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
