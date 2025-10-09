// src/app/app.ts (CORREGIDO)
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Usa los nombres de clase correctos en el array de imports
  imports: [
    NavbarComponent,
    HeaderComponent,
    RouterOutlet,
    ProjectsComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }