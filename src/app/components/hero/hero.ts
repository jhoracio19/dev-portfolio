import { Component, HostListener, ElementRef, inject, signal, computed, afterNextRender, OnDestroy } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnDestroy {
  private langService = inject(LanguageService);
  t = this.langService.current;
  private readonly experienceStartYear = 2025;
  readonly experienceYears = signal(Math.max(0, new Date().getFullYear() - this.experienceStartYear));
  readonly experienceSummary = computed(() => {
    const years = this.experienceYears();
    const text = this.t().design;
    return text.experienceSummary
      .replace('{years}', String(years))
      .replace('{unit}', years === 1 ? text.experienceYear : text.experienceYears);
  });
  private yearTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    afterNextRender(() => this.refreshExperience());
  }

  private refreshExperience() {
    const now = new Date();
    this.experienceYears.set(Math.max(0, now.getFullYear() - this.experienceStartYear));
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    this.yearTimer = setTimeout(() => this.refreshExperience(), midnight.getTime() - now.getTime() + 50);
  }

  ngOnDestroy() { clearTimeout(this.yearTimer); }

  readonly infoOpen = signal(false);
  private host = inject(ElementRef<HTMLElement>);

  @HostListener('document:click', ['$event'])
  closeInfoOutside(event: MouseEvent) {
    const info = this.host.nativeElement.querySelector('.achievement-info-wrap');
    if (event.target instanceof Node && !info?.contains(event.target)) this.infoOpen.set(false);
  }
}

