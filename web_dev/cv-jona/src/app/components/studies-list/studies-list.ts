import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, ExperienceItem } from '../../services/data';

@Component({
  selector: 'app-studies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studies-list.html',
  styleUrl: './studies-list.css'
})
export class StudiesListComponent {
  studies: ExperienceItem[];
  constructor(private dataService: DataService){
    this.studies = dataService.studies;
  }
}
