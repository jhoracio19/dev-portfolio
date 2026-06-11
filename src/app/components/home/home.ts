import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Projects } from '../projects/projects';
import { Experience } from '../experience/experience';
import { TechStack } from '../tech-stack/tech-stack';
import { About } from '../about/about';
import { Hackathons } from '../hackathons/hackathons';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Experience, TechStack, About, Hackathons],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
