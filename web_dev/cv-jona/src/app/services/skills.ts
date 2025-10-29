import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  
  private readonly apiUrl = 'http://localhost:3001/skills';

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl);
  }
  
}
