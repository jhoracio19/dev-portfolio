import { Component, signal } from '@angular/core';
import { sign } from 'crypto';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Navbar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // Creo un signal para el estado del menú
  isMenuOpen = signal(false);

  toggleMenu() {
    // Cambiamos el valor de true a false o viceversa
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
