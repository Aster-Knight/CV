import { Injectable } from '@angular/core';

export interface ExperienceItem {
  periodo: string;
  lugar: string;
  puesto: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _skills: string[] = ['Angular', 'TypeScript', 'CSS', 'JavaScript', 'Node.js', 'Git'];
  
  private _jobs: ExperienceItem[] = [
    { periodo: '2026', lugar: 'Freelance', puesto: 'Asesor Ciberseguridad y Redes' },
    { periodo: '2022-2023', lugar: 'Distribuidora Decorá', puesto: 'Asistente de Contabilidad y Auditor Junior' }
  ];

  private _studies: ExperienceItem[] = [
    { periodo: '2024 - Presente', lugar: 'Universidad Francisco Marroquín', puesto: 'Licenciatura en Computer Science' },
    { periodo: '2021 - 2023', lugar: 'Tecnológico Intercontinental', puesto: 'Perito Contador Bilingüe' }
  ];

  get skills(): string[] {
    return this._skills;
  }

  get jobs(): ExperienceItem[] {
    return this._jobs;
  }

  get studies(): ExperienceItem[] {
    return this._studies;
  }

  constructor() { }
}