import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { TechStack } from "./components/tech-stack/tech-stack";
import { About } from "./components/about/about";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, Hero, Projects, TechStack, About]
})
export class App {
  protected readonly title = signal('mi-portfolio-dev');
}
