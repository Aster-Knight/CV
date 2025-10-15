import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects';

@Component({
  selector: 'app-root',
  standalone: true,
  
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
