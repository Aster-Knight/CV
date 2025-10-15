// src/app/components/skills/skills.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importa el nuevo servicio y la interfaz
import { SkillsService, Skill } from '../../services/skills';

interface Technology {
  name: string;
  level: string;
  percentage: number;
  description: string;
}


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  
  // Creamos una propiedad para las habilidades que vienen de la API
  apiSkills: Skill[] = [];
  isLoading = true;

  // 2. Inyecta el nuevo servicio
  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    // 3. Llama al servicio y suscríbete
    this.skillsService.getSkills().subscribe({
      next: (data) => {
        this.apiSkills = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al obtener las habilidades de la API local', err);
        this.isLoading = false;
      }
    });
  }

  softSkills: string[] = ['Pensamiento Crítico', 'Liderazgo y Trabajo en Equipo', 'Aprendizaje Continuo', 'Adaptabilidad', 'Gestión de Riesgos', 'Comunicación Efectiva'];
  // programmingLanguages: string[] = ['C/C++', 'Python', 'Rust']; estalinea ya no es necesaria
  technologies: Technology[] = [
    { name: 'SO Linux Desktop', level: 'Avanzado', percentage: 95, description: 'Experiencia en el uso de sistemas operativos basados en Linux para desarrollo, gestión de paquetes y uso de la terminal.' },
    { name: 'Git', level: 'Avanzado', percentage: 95, description: 'Sólido manejo de Git para el control de versiones, colaboración en equipo mediante repositorios (GitHub, GitLab) y gestión de ramas.' },
    { name: 'SQL', level: 'Competente', percentage: 90, description: 'Conocimiento en SQL para la gestión y manipulación de información en bases de datos relacionales.' },
    { name: 'Docker', level: 'Intermedio', percentage: 80, description: 'Uso de Docker para crear, desplegar y ejecutar aplicaciones en contenedores.' },
    { name: 'Microcontroladores', level: 'Intermedio', percentage: 75, description: 'Familiarizado con la programación de microcontroladores para la automatización de procesos.' }
  ];
}
