// src/app/app.ts (CORREGIDO)
import { Component } from '@angular/core';

// 1. Importa las clases con el nombre COMPLETO y desde el archivo .component
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PrevioComponent } from './components/previo/previo.component'; // Asegúrate que este sea el nombre correcto

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Usa los nombres de clase correctos en el array de imports
  imports: [
    NavbarComponent,
    HeaderComponent,
    SkillsComponent,
    PrevioComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }