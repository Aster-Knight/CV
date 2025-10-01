import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router'; // Importa las directivas

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive], // Añádelas a los imports
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent { }