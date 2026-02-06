import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Projects } from '../projects/projects';
import { Experience } from '../experience/experience';
import { TechStack } from '../tech-stack/tech-stack';
import { About } from '../about/about';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Experience, TechStack, About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
