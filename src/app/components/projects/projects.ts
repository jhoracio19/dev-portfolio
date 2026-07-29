import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ProjectCategory } from '../../models/project-model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private projectService = inject(ProjectService);
  private langService = inject(LanguageService);

  featuredProjects = this.projectService.getFeaturedProjects();
  t = this.langService.current;

  categoryStyles: Record<ProjectCategory, string> = {
    platforms: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    tools: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    experiments: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  };

  categoryLabel(category: ProjectCategory) {
    return this.t().projects.categories[category];
  }
}
