import { Component, inject, signal, computed } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-list-page.html',
  styleUrl: './project-list-page.css',
})
export class ProjectListPage {
  private projectService = inject(ProjectService);
  projects = this.projectService.getProjects();
  
  filterSelected = signal<string>('Todos');

  categories = computed(() => {
    const techs = this.projects().flatMap((p) => p.technologies);
    return ['Todos', ...new Set(techs)];
  });

  filteredProjects = computed(() => {
    const filter = this.filterSelected();
    if (filter === 'Todos') return this.projects();
    return this.projects().filter((p) => p.technologies.includes(filter));
  });

  setFilter(filter: string) {
    this.filterSelected.set(filter);
  }
}
