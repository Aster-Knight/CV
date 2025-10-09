// src/app/components/projects/projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importa el servicio y la interfaz
import { GithubService, GithubRepo } from '../../services/github'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent implements OnInit {
  // Propiedad para guardar los repositorios que lleguen de la API
  repos: GithubRepo[] = [];
  isLoading = true; // Para mostrar un mensaje de "Cargando..."

  // Inyecta el servicio
  constructor(private githubService: GithubService) {}

  // ngOnInit es un "hook" que se ejecuta una vez cuando el componente se inicializa
  ngOnInit(): void {
    // Llamamos al método del servicio
    this.githubService.getRepos().subscribe({
      next: (data) => {
        // Esto se ejecuta cuando la API responde con éxito
        this.repos = data;
        this.isLoading = false;
      },
      error: (err) => {
        // Esto se ejecuta si hay un error en la petición
        console.error('Error fetching GitHub repos', err);
        this.isLoading = false;
      }
    });
  }
}