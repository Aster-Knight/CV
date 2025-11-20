import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    NavbarComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }
