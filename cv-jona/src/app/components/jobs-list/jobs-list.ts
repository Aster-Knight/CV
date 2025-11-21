import { Component } from '@angular/core';

import { DataService, ExperienceItem } from '../../services/data';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [],
  templateUrl: './jobs-list.html',
  styleUrl: './jobs-list.css'
})
export class JobsListComponent {
  jobs: ExperienceItem[]
  constructor(private dataService: DataService) {
    this.jobs = this.dataService.jobs;
  }
}