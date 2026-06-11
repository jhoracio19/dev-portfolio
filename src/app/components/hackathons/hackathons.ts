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
      name: 'Hackathon Safe Industry 2026',
      projectCreated: 'EcoTrust',
      description: 'En menos de 10 horas, desarrollamos una solución para digitalizar la seguridad en cocinas industriales. Fue una carrera contra el reloj donde la simplicidad y la eficacia fueron nuestras mejores aliadas.',
      date: 'Junio 2026',
      technologies: ['Python', 'Django', 'FastAPI'],
      achievement: 'Top 10 Finalistas',
      certificateUrl: 'assets/certificado_programacion.pdf',
      repoUrl: 'https://github.com/jhoracio19',
    },
  ]);
}
