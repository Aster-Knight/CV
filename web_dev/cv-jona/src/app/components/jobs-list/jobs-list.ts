import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar *ngFor

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs-list.html',
  styleUrl: './jobs-list.css'
})
export class JobsListComponent {
  // Tomamos solo los datos de experiencia laboral de tu antiguo componente
  experienceData = [
    { periodo: '2026', lugar: 'Freelance', puesto: 'Asesor Ciberseguridad y Redes' },
    { periodo: '2022-2023', lugar: 'Distribuidora Decorá', puesto: 'Asistente de Contabilidad y Auditor Junior' }
  ];
}