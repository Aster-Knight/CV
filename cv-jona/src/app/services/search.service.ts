import { Injectable } from '@angular/core';
import { GithubService } from './github';
import { DataService } from './data';
import { Observable, of, forkJoin, map } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface SearchResult {
  type: 'GitHub Repo' | 'Habilidad' | 'Experiencia' | 'Estudio';
  title: string;
  url: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private githubService: GithubService,
    private dataService: DataService
  ) { }

  search(term: string): Observable<SearchResult[]> {
    if (!term.trim()) {
      return of([]);
    }

    const lowerCaseTerm = term.toLowerCase();

    // GitHub Repo Search
    const githubSearch$ = this.githubService.getRepos().pipe(
      map(repos => 
        repos
          .filter(repo => 
            repo.name.toLowerCase().includes(lowerCaseTerm) || 
            (repo.description && repo.description.toLowerCase().includes(lowerCaseTerm))
          )
          .map(repo => ({
            type: 'GitHub Repo',
            title: repo.name,
            url: repo.html_url,
            description: repo.description
          } as SearchResult))
      ),
      catchError(() => of([] as SearchResult[]))
    );

    // Local CV Content Search
    const localSkills$ = of(this.dataService.skills
      .filter(skill => skill.toLowerCase().includes(lowerCaseTerm))
      .map(skill => ({
        type: 'Habilidad',
        title: skill,
        url: '/#skills' // Anchor link to skills section
      } as SearchResult))
    );

    const localJobs$ = of(this.dataService.jobs
      .filter(job => 
        job.puesto.toLowerCase().includes(lowerCaseTerm) ||
        job.lugar.toLowerCase().includes(lowerCaseTerm)
      )
      .map(job => ({
        type: 'Experiencia',
        title: `${job.puesto} en ${job.lugar}`,
        url: '/#experience'
      } as SearchResult))
    );

    const localStudies$ = of(this.dataService.studies
      .filter(study => 
        study.puesto.toLowerCase().includes(lowerCaseTerm) ||
        study.lugar.toLowerCase().includes(lowerCaseTerm)
      )
      .map(study => ({
        type: 'Estudio',
        title: `${study.puesto} en ${study.lugar}`,
        url: '/#experience'
      } as SearchResult))
    );

    return forkJoin([githubSearch$, localSkills$, localJobs$, localStudies$]).pipe(
      map(([githubResults, skillsResults, jobsResults, studiesResults]) => {
        return [...skillsResults, ...jobsResults, ...studiesResults, ...githubResults];
      })
    );
  }
}
