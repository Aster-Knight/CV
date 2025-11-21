import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  private readonly apiUrl = '/api/skills';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object // Inyectamos el identificador de plataforma
  ) { }

  public getSkills(): Observable<Skill[]> {
    // Verificamos si estamos ejecutándonos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      return this.http.get<Skill[]>(this.apiUrl);
    }
    // Si estamos en el servidor (Build/SSR), retornamos un array vacío para que no falle
    return of([]); 
  }
  
}