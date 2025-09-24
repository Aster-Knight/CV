import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor

interface TimelineItem {
  periodo: string;
  lugar: string;
  puesto: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  educationData: TimelineItem[] = [
    { periodo: '2024 - Presente', lugar: 'Universidad Francisco Marroquín', puesto: 'Licenciatura en Computer Science' },
    { periodo: '2021 - 2023', lugar: 'Tecnológico Intercontinental', puesto: 'Perito Contador Bilingüe' }
  ];

  experienceData: TimelineItem[] = [
    { periodo: '2026', lugar: 'Freelance', puesto: 'Asesor Ciberseguridad y Redes' },
    { periodo: '2022-2023', lugar: 'Distribuidora Decorá', puesto: 'Asistente de Contabilidad y Auditor Junior' }
  ];
}