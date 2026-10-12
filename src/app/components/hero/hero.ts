import { Component, HostListener, ElementRef, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private langService = inject(LanguageService);
  t = this.langService.current;
  readonly infoOpen = signal(false);
  private host = inject(ElementRef<HTMLElement>);

  @HostListener('document:click', ['$event'])
  closeInfoOutside(event: MouseEvent) {
    const info = this.host.nativeElement.querySelector('.achievement-info-wrap');
    if (event.target instanceof Node && !info?.contains(event.target)) this.infoOpen.set(false);
  }
}

