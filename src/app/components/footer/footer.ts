import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private langService = inject(LanguageService);
  t = this.langService.current;

  emailCopied = signal(false);

  copyFailed = signal(false);

  async copyEmail() {
    this.copyFailed.set(false);
    try {
      await navigator.clipboard.writeText('jhoracio19@hotmail.com');
      this.emailCopied.set(true);
      setTimeout(() => this.emailCopied.set(false), 2500); // Reset después de 2.5s
    } catch {
      this.emailCopied.set(false);
      this.copyFailed.set(true);
    }
  }
}
