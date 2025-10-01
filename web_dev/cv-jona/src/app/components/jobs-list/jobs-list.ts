import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, ExperienceItem } from '../../services/data';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs-list.html',
  styleUrl: './jobs-list.css'
})
export class JobsListComponent {
  jobs: ExperienceItem[]
  constructor(private dataService: DataService) {
    this.jobs = this.dataService.jobs;
  }
}
 