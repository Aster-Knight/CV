import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
  
  private readonly username = 'Aster-Knight'; 
  private readonly apiUrl = `https://api.github.com/users/${this.username}/repos`;

  
  constructor(private http: HttpClient) { }

  
  
  public getRepos(): Observable<GithubRepo[]> {
    
    return this.http.get<GithubRepo[]>(`${this.apiUrl}?sort=updated&per_page=5`);
  }
}
