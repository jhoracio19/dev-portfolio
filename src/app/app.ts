import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { TechStack } from "./components/tech-stack/tech-stack";
import { About } from "./components/about/about";
import { Experience } from "./components/experience/experience";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, Hero, Projects, TechStack, About, Experience, Footer]
})
export class App {
  protected readonly title = signal('mi-portfolio-dev');
}
