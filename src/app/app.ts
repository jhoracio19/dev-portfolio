import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, Hero]
})
export class App {
  protected readonly title = signal('mi-portfolio-dev');
}
