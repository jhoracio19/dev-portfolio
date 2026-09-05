import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { AnimatedDetailsDirective } from '../../directives/animated-details.directive';

@Component({
  selector: 'app-about',
  imports: [CommonModule, AnimatedDetailsDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private langService = inject(LanguageService);
  t = this.langService.current;
}
