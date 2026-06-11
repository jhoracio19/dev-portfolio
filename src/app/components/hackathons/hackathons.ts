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
    {
      id: 'hack-1',
      name: 'Hackathon "Por Amor a Puebla"',
      projectCreated: 'Cafetzin',
      description: 'Plataforma digital desarrollada para conectar directamente a productores de café de la Sierra Norte de Puebla con cafeterías y consumidores finales. Diseñada para promover el comercio justo, optimizar la logística y eliminar intermediarios.',
      date: 'Mayo 2026',
      technologies: ['Python', 'Django'],
      achievement: 'Top 10',
      certificateUrl: 'assets/hacks/por_amor_puebla.pdf',
      repoUrl: 'https://github.com/jhoracio19/cafetzin.git',
    },
    {
      id: 'hack-2',
      name: 'Hackathon Safe Industry 2026',
      projectCreated: 'EcoTrust',
      description: 'En menos de 6 horas, desarrollamos una solución para digitalizar la seguridad en cocinas industriales. Fue una carrera contra el reloj donde la simplicidad y la eficacia fueron nuestras mejores aliadas.',
      date: 'Junio 2026',
      technologies: ['Python', 'Django', 'MVT'],
      achievement: 'Top 2',
      //certificateUrl: 'assets/certificado_programacion.pdf',
      repoUrl: 'https://github.com/jhoracio19/ecotrust-mvp.git',
    },
  ]);
}
