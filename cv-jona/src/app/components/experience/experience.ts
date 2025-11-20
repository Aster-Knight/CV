import { Component } from '@angular/core';
import { JobsListComponent } from '../jobs-list/jobs-list';
import { StudiesListComponent } from '../studies-list/studies-list';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [JobsListComponent, StudiesListComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent { }
