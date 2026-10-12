import { Component, computed, inject } from '@angular/core';
import { Hackathon } from '../../models/hackathon-model';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hackathons',
  imports: [CommonModule],
  templateUrl: './hackathons.html',
  styleUrl: './hackathons.css',
})
export class Hackathons {
  private langService = inject(LanguageService);
  t = this.langService.current;

  hackathons = computed<Hackathon[]>(() => {
    const isEn = this.langService.lang() === 'en';

    return [
      {
        id: 'hack-mty-capital-one',
        name: 'HackMTY · Capital One',
        projectCreated: 'Stackly',
        description: isEn
          ? 'Financial resilience simulator for SMEs, built in 36 hours. Stackly projects the cash-flow impact of hiring, new projects, inventory purchases, and extending credit before a decision is made. Its deterministic Python and NumPy engine processes scenarios day by day with reproducible, traceable results. Go orchestration uses hexagonal architecture and a contract-first approach, while PostgreSQL and TimescaleDB model money as financial events over time. If more than 20% of the required financial profile is unknown, the system abstains from projecting rather than providing misleading precision. Second place in the Capital One track at HackMTY 2026.'
          : 'Simulador de resiliencia financiera para pymes, construido en 36 horas. Stackly proyecta el impacto de contratar personal, aceptar proyectos, comprar inventario u otorgar crédito sobre el flujo de caja antes de tomar una decisión. Su motor determinista en Python y NumPy procesa escenarios día a día con resultados reproducibles y trazables. La orquestación en Go utiliza arquitectura hexagonal y un enfoque contract-first, mientras PostgreSQL y TimescaleDB modelan el dinero como eventos financieros en el tiempo. Si se desconoce más del 20% del perfil financiero necesario, el sistema se abstiene de proyectar para evitar una precisión engañosa. Segundo lugar en el reto de Capital One en HackMTY 2026.',
        date: isEn ? 'September 2026' : 'Septiembre 2026',
        technologies: ['Python', 'NumPy', 'Go', 'PostgreSQL', 'TimescaleDB'],
        linkedinUrl: 'https://lnkd.in/p/eBVaw-KU',
        achievement: isEn ? '2nd place · Capital One' : '2.º lugar · Capital One',
      },
      {
        id: 'hack-3',
        name: 'Industry Hack Tec',
        projectCreated: 'Verdana Loop',
        linkedinUrl: 'https://lnkd.in/p/e3f3en_X',
        certificateUrl: 'assets/hacks/certificado_hackindustry.pdf',
        description: isEn
          ? 'Offline-first PWA built in 48 hours (Next.js 16 + Expo, TypeScript monorepo, 26 screens, 4 roles) for a sustainability challenge focused on reusable packaging. 3rd place out of 25 teams.'
          : 'PWA offline-first construida en 48 horas (Next.js 16 + Expo, monorepo TypeScript, 26 pantallas, 4 roles) para reto de sustentabilidad en empaques reutilizables. 3er lugar de 25 equipos.',
        date: isEn ? 'August 2026' : 'Agosto 2026',
        technologies: ['Next.js 16', 'Expo', 'TypeScript', 'Monorepo'],
        achievement: isEn ? '3rd / 25 teams' : '3er / 25 equipos',
        prize: isEn ? '$2,000 + Yellow Belt Certification' : '$2,000 + Certificación Yellow Belt',
        demoUrls: [
          {
            label: isEn ? 'Client View' : 'Vista Cliente',
            url: 'https://verdana-loop-pwa.vercel.app/',
            icon: 'fas fa-mobile-alt',
          },
          {
            label: isEn ? 'Enterprise Panel' : 'Vista Empresa',
            url: 'https://verdana-loop.vercel.app/panel',
            icon: 'fas fa-building',
          },
        ],
      },
      {
        id: 'hack-1',
        name: 'Hackathon "Por Amor a Puebla"',
        projectCreated: 'Cafetzin',
        linkedinUrl: 'https://lnkd.in/p/emgxFfnK',
        description: isEn 
          ? 'Digital platform developed to directly connect coffee producers from the Sierra Norte of Puebla with coffee shops and final consumers. Designed to promote fair trade, optimize logistics, and eliminate intermediaries.'
          : 'Plataforma digital desarrollada para conectar directamente a productores de café de la Sierra Norte de Puebla con cafeterías y consumidores finales. Diseñada para promover el comercio justo, optimizar la logística y eliminar intermediarios.',
        date: isEn ? 'May 2026' : 'Mayo 2026',
        technologies: ['Python', 'Django'],
        achievement: 'Top 10',
        certificateUrl: 'assets/hacks/por_amor_puebla.pdf',
        repoUrl: 'https://github.com/jhoracio19/cafetzin.git',
      },
      {
        id: 'hack-2',
        name: 'Hackathon Safe Industry 2026',
        projectCreated: 'EcoTrust',
        linkedinUrl: 'https://lnkd.in/p/ewHNTMA3',
        description: isEn 
          ? 'In less than 6 hours, we developed a solution to digitize safety in industrial kitchens. It was a race against the clock where simplicity and efficiency were our best allies.'
          : 'En menos de 6 horas, desarrollamos una solución para digitalizar la seguridad en cocinas industriales. Fue una carrera contra el reloj donde la simplicidad y la eficacia fueron nuestras mejores aliadas.',
        date: isEn ? 'June 2026' : 'Junio 2026',
        technologies: ['Python', 'Django', 'MVT'],
        achievement: 'Top 2',
        //certificateUrl: 'assets/certificado_programacion.pdf',
        repoUrl: 'https://github.com/jhoracio19/ecotrust-mvp.git',
      },
    ];
  });
}
