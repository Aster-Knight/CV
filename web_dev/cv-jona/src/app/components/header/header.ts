import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para [class]
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  greetingText: string = '';
  currentTime: string = '';
  currentDate: string = '';
  greetingIconClass: string = '';
  profilePhoto: string = 'assets/cv foto.webp'; // Ruta actualizada
  isContactMinimal: boolean = false;
  experienceIconClass: string = 'bi bi-patch-check-fill me-2';
  contactIconClass: string = 'bi bi-person-lines-fill me-2';
  contactButtonText: string = 'Contacto Detallado';
  themeIconClass: string = 'bi bi-sun-fill me-2';
  themeButtonText: string = 'Modo Claro';

  private timerId: any;

  ngOnInit(): void {
    this.updateDynamicGreeting();
    this.timerId = setInterval(() => this.updateDynamicGreeting(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) clearInterval(this.timerId);
  }

  updateDynamicGreeting(): void {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) {
      this.greetingText = 'Buenos días';
      this.greetingIconClass = 'bi bi-brightness-high-fill text-warning';
    } else if (hours < 19) {
      this.greetingText = 'Buenas tardes';
      this.greetingIconClass = 'bi bi-sunset-fill text-info';
    } else {
      this.greetingText = 'Buenas noches';
      this.greetingIconClass = 'bi bi-moon-stars-fill text-light';
    }
    this.currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('es-ES', dateOptions);
    this.currentDate = dateString.charAt(0).toUpperCase() + dateString.slice(1);
  }

  generatePDF(): void {
    const bodyElement = document.body;
    const currentPhotoSrc = this.profilePhoto;
    this.profilePhoto = 'assets/profile_black.webp'; // Ruta actualizada
    bodyElement.classList.add('pdf-view');
    const opt = { margin: 0.5, filename: 'CV-Jonatan-Aguilar.pdf', image: { type: "jpeg" as "jpeg", quality: 0.98 }, html2canvas: { scale: 2, useCORS: true }, jsPDF: { unit: 'in', format: 'letter', orientation: "portrait" as "portrait" } };
    html2pdf().set(opt).from(bodyElement).save().then(() => {
      bodyElement.classList.remove('pdf-view');
      this.profilePhoto = currentPhotoSrc;
    });
  }

  toggleExperience(): void {
    const experienceSection = document.getElementById('experiencia');
    if (experienceSection) {
      experienceSection.classList.toggle('section-hidden');
      this.experienceIconClass = experienceSection.classList.contains('section-hidden') ? 'bi bi-patch-plus-fill me-2' : 'bi bi-patch-check-fill me-2';
    }
  }

  toggleContactView(): void {
    this.isContactMinimal = !this.isContactMinimal;
    if (this.isContactMinimal) {
      this.profilePhoto = 'assets/profile_black.webp'; // Ruta actualizada
      this.contactIconClass = 'bi bi-person-fill me-2';
      this.contactButtonText = 'Contacto Básico';
    } else {
      this.profilePhoto = 'assets/cv foto.webp'; // Ruta actualizada
      this.contactIconClass = 'bi bi-person-lines-fill me-2';
      this.contactButtonText = 'Contacto Detallado';
    }
  }

  toggleTheme(): void {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      this.profilePhoto = 'assets/profile_black.webp'; // Ruta actualizada
      this.themeIconClass = 'bi bi-moon-stars-fill me-2';
      this.themeButtonText = 'Modo Oscuro';
    } else {
      this.profilePhoto = 'assets/cv foto.webp'; // Ruta actualizada
      this.themeIconClass = 'bi bi-sun-fill me-2';
      this.themeButtonText = 'Modo Claro';
    }
  }
}