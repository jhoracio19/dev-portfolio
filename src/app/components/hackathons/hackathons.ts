import { Component, signal } from '@angular/core';
import { Hackathon } from '../../models/hackathon-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hackathons',
  imports: [CommonModule],
  templateUrl: './hackathons.html',
  styleUrl: './hackathons.css',
})
export class Hackathons {
  hackathons = signal<Hackathon[]>([
    // Ejemplo para que veas cómo queda
    {
      id: 'hack-1',
      name: 'Hackathon "Por Amor a Puebla"',
      projectCreated: 'Cafetzin',
      description: 'Plataforma digital desarrollada para conectar directamente a productores de café de la Sierra Norte de Puebla con cafeterías y consumidores finales. Diseñada para promover el comercio justo, optimizar la logística y eliminar intermediarios.',
      date: 'Mayo 2026)',
      technologies: ['Python', 'Django', 'API Meta', 'API Gemini'],
      achievement: 'Top 10',
      certificateUrl: 'assets/hacks/por_amor_puebla.pdf',
      repoUrl: 'https://github.com/jhoracio19/cafetzin.git', // Ejemplo de repositorio
      },
      {
      id: 'hack-2',
      name: 'Hackathon Safe Industry 2026',
      projectCreated: 'EcoTrust',
      description: 'SaaS B2B desarrollado en menos de 10 horas para digitalizar bitácoras de bioseguridad en cocinas industriales. Integra un "Swipe Sanitario" ágil, dashboard directivo y directorio de proveedores.',
      date: 'Junio 2026',
      technologies: ['Python', 'Django'],
      achievement: 'Top 3',
      //certificateUrl: 'assets/certificado_programacion.pdf',
      repoUrl: 'https://github.com/jhoracio19/ecotrust-mvp.git', // Ejemplo de repositorio
      }
      ]);
      }

