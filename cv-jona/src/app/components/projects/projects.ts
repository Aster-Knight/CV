import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubService, GithubRepo, GithubProfile } from '../../services/github';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent implements OnInit {

  repos: GithubRepo[] = [];
  profile: GithubProfile | null = null;
  isLoading = true;


  constructor(private githubService: GithubService) { }


  ngOnInit(): void {
    this.githubService.getUserProfile().subscribe({
      next: (data) => {
        this.profile = data;
      },
      error: (err) => console.error('Error fetching GitHub profile', err)
    });

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
