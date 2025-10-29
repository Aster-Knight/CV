import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface PrevioItem {
  periodo: string;
  lugar: string;
  puesto: string;
}

@Component({
  selector: 'app-previo',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './previo.component.html',
  styleUrls: ['./previo.component.css']
})
export class PrevioComponent {
  educationData: PrevioItem[] = [
    { periodo: '2024 - Presente', lugar: 'Universidad Francisco Marroquín', puesto: 'Licenciatura en Computer Science' },
    { periodo: '2021 - 2023', lugar: 'Tecnológico Intercontinental', puesto: 'Perito Contador Bilingüe' }
  ];

  experienceData: PrevioItem[] = [
    { periodo: '2026', lugar: 'Freelance', puesto: 'Asesor Ciberseguridad y Redes' },
    { periodo: '2022-2023', lugar: 'Distribuidora Decorá', puesto: 'Asistente de Contabilidad y Auditor Junior' }
  ];
}
