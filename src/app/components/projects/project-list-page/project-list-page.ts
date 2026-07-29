import { Component, inject, signal, computed } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { ProjectCategory } from '../../../models/project-model';

type CategoryFilter = ProjectCategory | 'all';

@Component({
  selector: 'app-project-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-list-page.html',
  styleUrl: './project-list-page.css',
})
export class ProjectListPage {
  private projectService = inject(ProjectService);
  public langService = inject(LanguageService);
  t = this.langService.current;

  projects = this.projectService.getProjects();

  categoryOrder: ProjectCategory[] = ['platforms', 'tools', 'experiments'];

  categoryStyles: Record<ProjectCategory, { badge: string; dot: string }> = {
    platforms: { badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20', dot: 'bg-sky-500' },
    tools: { badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20', dot: 'bg-violet-500' },
    experiments: { badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', dot: 'bg-emerald-500' },
  };

  filterSelected = signal<CategoryFilter>('all');

  filters = computed(() => {
    const labels = this.t().projects.categories;
    return [
      { key: 'all' as CategoryFilter, label: this.t().projects.filter_all },
      ...this.categoryOrder.map((key) => ({ key: key as CategoryFilter, label: labels[key] })),
    ];
  });

  groups = computed(() => {
    const filter = this.filterSelected();
    const labels = this.t().projects.categories;
    const categories = filter === 'all' ? this.categoryOrder : this.categoryOrder.filter((c) => c === filter);

    return categories
      .map((category) => ({
        key: category,
        label: labels[category],
        projects: this.projects().filter((p) => p.category === category),
      }))
      .filter((group) => group.projects.length > 0);
  });

  setFilter(filter: CategoryFilter) {
    this.filterSelected.set(filter);
  }
}
