import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar *ngFor

@Component({
  selector: 'app-studies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studies-list.html',
  styleUrl: './studies-list.css'
})
export class StudiesListComponent {
  // Tomamos solo los datos de educación de tu antiguo componente
  educationData = [
    { periodo: '2024 - Presente', lugar: 'Universidad Francisco Marroquín', puesto: 'Licenciatura en Computer Science' },
    { periodo: '2021 - 2023', lugar: 'Tecnológico Intercontinental', puesto: 'Perito Contador Bilingüe' }
  ];
}