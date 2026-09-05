import { Component, inject, computed } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ProjectCategory } from '../../models/project-model';
import { AnimatedDetailsDirective } from '../../directives/animated-details.directive';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink, AnimatedDetailsDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private projectService = inject(ProjectService);
  private langService = inject(LanguageService);

  featuredProjects = this.projectService.getFeaturedProjects();
  t = this.langService.current;

  cases = computed<
    Record<string, { summary: string; challenge: string; implementation: string; result: string }>
  >(() =>
    this.langService.lang() === 'es'
      ? {
          remindhome: {
            summary: 'Un hogar organizado, con alimentos y tareas en un mismo lugar.',
            challenge:
              'Compartir lo que hay en el refrigerador y recordar las tareas recurrentes entre los miembros de una casa.',
            implementation:
              'Aplicación con Next.js y Supabase para registrar alimentos y tareas, con actualizaciones compartidas en tiempo real.',
            result:
              'Un producto web publicado que reúne inventario, recordatorios y colaboración doméstica.',
          },
          'otorrino-tlaxcala': {
            summary: 'De conocer los servicios de un especialista a agendar una consulta.',
            challenge:
              'Ayudar a pacientes a encontrar información sobre servicios y un camino claro para solicitar una cita.',
            implementation:
              'Sitio en Angular con servicios, testimonios, galería de antes y después y agendado de citas.',
            result:
              'Un sitio publicado que reúne información del consultorio y acceso al agendado.',
          },
          'cabana-maria-maria': {
            summary: 'Explorar un espacio para eventos y cotizar sin perder el contexto.',
            challenge:
              'Mostrar el lugar, explicar sus paquetes y facilitar el contacto de quienes organizan un evento.',
            implementation:
              'Sitio con Next.js, cotizador de paquetes, galería, preguntas frecuentes y contacto por WhatsApp.',
            result:
              'Una experiencia publicada que conecta la exploración del espacio con la cotización y el contacto.',
          },
        }
      : {
          remindhome: {
            summary: 'Food and recurring chores, together in a shared household app.',
            challenge:
              'Share fridge inventory and keep recurring chores visible to everyone at home.',
            implementation:
              'A Next.js and Supabase application for food and chores, with shared real-time updates.',
            result:
              'A published web product bringing inventory, reminders and household collaboration together.',
          },
          'otorrino-tlaxcala': {
            summary: 'From discovering a specialist’s services to booking an appointment.',
            challenge:
              'Help patients find service information and a clear path to request an appointment.',
            implementation:
              'An Angular website with services, testimonials, a before-and-after gallery and appointment booking.',
            result:
              'A published website combining clinic information and access to appointment booking.',
          },
          'cabana-maria-maria': {
            summary: 'Explore an event venue and estimate a package in one place.',
            challenge:
              'Show the venue, explain its packages and help event organizers get in touch.',
            implementation:
              'A Next.js website with a package calculator, gallery, FAQ and WhatsApp contact.',
            result: 'A published experience connecting venue discovery with quotes and contact.',
          },
        },
  );

  categoryLabel(category: ProjectCategory) {
    return this.t().projects.categories[category];
  }
}
