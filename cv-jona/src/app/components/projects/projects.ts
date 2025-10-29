import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubService, GithubRepo } from '../../services/github'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent implements OnInit {
  
  repos: GithubRepo[] = [];
  isLoading = true; 

  
  constructor(private githubService: GithubService) {}

  
  ngOnInit(): void {
    
    this.githubService.getRepos().subscribe({
      next: (data) => {
        
        this.repos = data;
        this.isLoading = false;
      },
      error: (err) => {
        
        console.error('Error fetching GitHub repos', err);
        this.isLoading = false;
      }
    });
  }
}
