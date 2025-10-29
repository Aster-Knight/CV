import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NasaService, ApodResponse } from '../../services/nasa';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  

  
  greetingText = '';
  currentTime = '';
  currentDate = '';
  greetingIconClass = '';
  
  
  profilePhoto = 'assets/cv-foto.webp';
  
  
  backgroundImageUrl = '';

  
  isContactMinimal = false;
  experienceIconClass = 'bi bi-patch-check-fill me-2';
  contactIconClass = 'bi bi-person-lines-fill me-2';
  contactButtonText = 'Contacto Detallado';
  themeIconClass = 'bi bi-sun-fill me-2';
  themeButtonText = 'Modo Claro';

  private timerId: any;

  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private nasaService: NasaService
  ) {}

  ngOnInit(): void {
    
    if (isPlatformBrowser(this.platformId)) {
      
      this.nasaService.getAstronomyPictureOfTheDay().subscribe({
        next: (data: ApodResponse) => {
          if (data.media_type === 'image') {
            this.backgroundImageUrl = data.hdurl || data.url;
          } else {
            
            this.backgroundImageUrl = 'assets/fondo_perfil.gif';
          }
        },
        error: (err) => {
          console.error('Error fetching NASA APOD, using fallback:', err);
          
          this.backgroundImageUrl = 'assets/fondo_perfil.gif';
        }
      });
      
      
      this.updateDynamicGreeting();
      this.timerId = setInterval(() => this.updateDynamicGreeting(), 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  

  async generatePDF(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      
      const html2pdf = (await import('html2pdf.js')).default;

      const bodyElement = document.body;
      const currentPhotoSrc = this.profilePhoto;
      this.profilePhoto = 'assets/profile_black.webp'; 
      bodyElement.classList.add('pdf-view');
      
      const opt = { margin: 0.5, filename: 'CV-Jonatan-Aguilar.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2, useCORS: true }, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } } as const;
      
      html2pdf().set(opt).from(bodyElement).save().then(() => {
        bodyElement.classList.remove('pdf-view');
        this.profilePhoto = currentPhotoSrc;
      });
    }
  }

  toggleExperience(): void {
    if (isPlatformBrowser(this.platformId)) {
      const experienceSection = document.getElementById('experiencia');
      if (experienceSection) {
        experienceSection.classList.toggle('section-hidden');
        this.experienceIconClass = experienceSection.classList.contains('section-hidden') ? 'bi bi-patch-plus-fill me-2' : 'bi bi-patch-check-fill me-2';
      }
    }
  }

  toggleContactView(): void {
    this.isContactMinimal = !this.isContactMinimal;
    if (this.isContactMinimal) {
      this.profilePhoto = 'assets/profile_black.webp'; 
      this.contactIconClass = 'bi bi-person-fill me-2';
      this.contactButtonText = 'Contacto Básico';
    } else {
      this.profilePhoto = 'assets/cv-foto.webp'; 
      this.contactIconClass = 'bi bi-person-lines-fill me-2';
      this.contactButtonText = 'Contacto Detallado';
    }
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('light-mode');
      if (document.body.classList.contains('light-mode')) {
        this.profilePhoto = 'assets/profile_black.webp'; 
        this.themeIconClass = 'bi bi-moon-stars-fill me-2';
        this.themeButtonText = 'Modo Oscuro';
      } else {
        this.profilePhoto = 'assets/cv-foto.webp'; 
        this.themeIconClass = 'bi bi-sun-fill me-2';
        this.themeButtonText = 'Modo Claro';
      }
    }
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
}
