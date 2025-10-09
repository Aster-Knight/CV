// src/app/services/github.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient
import { Observable } from 'rxjs'; // Importa Observable

// (Opcional pero muy recomendado) Define una interfaz para la respuesta de la API
export interface GithubRepo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // Reemplaza 'Aster-Knight' con tu nombre de usuario de GitHub
  private readonly username = 'Aster-Knight'; 
  private readonly apiUrl = `https://api.github.com/users/${this.username}/repos`;

  // 1. Inyecta HttpClient en el constructor
  constructor(private http: HttpClient) { }

  // 2. Crea un método que devuelve un Observable
  // Un Observable es como una promesa que gestiona flujos de datos asíncronos
  public getRepos(): Observable<GithubRepo[]> {
    // 3. Usa el método .get() para hacer la petición a la API
    return this.http.get<GithubRepo[]>(`${this.apiUrl}?sort=updated&per_page=5`);
  }
}