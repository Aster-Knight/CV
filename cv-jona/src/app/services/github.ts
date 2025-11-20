import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface GithubRepo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

export interface GithubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly username = 'Aster-Knight';
  private readonly apiUrl = `https://api.github.com/users/${this.username}`;


  constructor(private http: HttpClient) { }



  public getRepos(): Observable<GithubRepo[]> {

    return this.http.get<GithubRepo[]>(`${this.apiUrl}/repos?sort=updated&per_page=5`);
  }

  public getUserProfile(): Observable<GithubProfile> {
    return this.http.get<GithubProfile>(this.apiUrl);
  }
}
