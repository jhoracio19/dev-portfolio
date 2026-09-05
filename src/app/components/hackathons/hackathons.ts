import { Component, computed, inject } from '@angular/core';
import { Hackathon } from '../../models/hackathon-model';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { AnimatedDetailsDirective } from '../../directives/animated-details.directive';

@Component({
  selector: 'app-hackathons',
  imports: [CommonModule, AnimatedDetailsDirective],
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
        id: 'hack-3',
        name: 'Industry Hack Tec',
        projectCreated: 'Verdana Loop',
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
