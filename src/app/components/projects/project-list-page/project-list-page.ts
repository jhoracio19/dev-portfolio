import { Component, inject, signal, computed } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { Project, ProjectCategory } from '../../../models/project-model';

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

  projects = computed(() =>
    [...this.projectService.getProjects()()].sort(
      (a, b) => this.categoryOrder.indexOf(a.category) - this.categoryOrder.indexOf(b.category),
    ),
  );

  categoryOrder: ProjectCategory[] = ['clients', 'platforms', 'tools', 'experiments'];

  filterSelected = signal<CategoryFilter>('all');
  searchQuery = signal<string>('');

  i18n = computed(() => {
    const isEs = this.langService.lang() === 'es';
    return {
      searchPlaceholder: isEs ? 'Buscar proyecto o tecnología' : 'Search projects or technologies',
      showing: isEs ? 'Mostrando' : 'Showing',
      of: isEs ? 'de' : 'of',
      projectsText: isEs ? 'proyectos' : 'projects',
      clearSearch: isEs ? 'Limpiar filtros' : 'Clear filters',
      noResultsTitle: isEs ? 'No se encontraron proyectos' : 'No projects found',
      noResultsDesc: isEs
        ? 'No hay resultados que coincidan con tu búsqueda. Intenta con otra palabra clave o categoría.'
        : 'No results match your search. Try another keyword or select another category.',
      viewCode: isEs ? 'Ver código' : 'View code',
      liveDemo: isEs ? 'Visitar sitio' : 'Visit website',
    };
  });

  filters = computed(() => {
    const labels = this.t().projects.categories;
    const all = this.projects();
    return [
      {
        key: 'all' as CategoryFilter,
        label: this.t().projects.filter_all,
        count: all.length,
      },
      ...this.categoryOrder.map((key) => ({
        key: key as CategoryFilter,
        label: labels[key],
        count: all.filter((p) => p.category === key).length,
      })),
    ];
  });

  filteredProjects = computed<Project[]>(() => {
    const filter = this.filterSelected();
    const query = this.searchQuery().trim().toLowerCase();

    return this.projects().filter((p) => {
      const matchesCategory = filter === 'all' || p.category === filter;
      if (!matchesCategory) return false;

      if (!query) return true;

      const inTitle = p.title.toLowerCase().includes(query);
      const inDesc = p.description.toLowerCase().includes(query);
      const inTech = p.technologies.some((t) => t.toLowerCase().includes(query));

      return inTitle || inDesc || inTech;
    });
  });

  setFilter(filter: CategoryFilter) {
    this.filterSelected.set(filter);
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
  }

  clearSearch() {
    this.searchQuery.set('');
    this.filterSelected.set('all');
  }

  categoryLabel(category: ProjectCategory) {
    return this.t().projects.categories[category];
  }
}
