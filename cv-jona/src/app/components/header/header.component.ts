import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NasaService, ApodResponse } from '../../services/nasa';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

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
  contactIconClass = 'bi bi-person-lines-fill me-2';
  contactButtonText = 'Contacto Detallado';
  isLightMode = false;
  themeIconClass = 'bi bi-moon-stars-fill me-2';

  private timerId: any;
  private themeSubscription: Subscription | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private nasaService: NasaService,
    @Optional() private themeService: ThemeService
  ) {
    if (this.themeService) {
      this.themeSubscription = this.themeService.isLightMode$.subscribe(isLightMode => {
        this.isLightMode = isLightMode;
        this.updateThemeVisuals();
      });
    }
  }

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
    this.themeSubscription?.unsubscribe();
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
    this.themeService?.toggleTheme();
  }

  private updateThemeVisuals(): void {
    if (this.isLightMode) {
      this.profilePhoto = 'assets/profile_black.webp';
      this.themeIconClass = 'bi bi-sun-fill me-2';
    } else {
      this.profilePhoto = 'assets/cv-foto.webp';
      this.themeIconClass = 'bi bi-moon-stars-fill me-2';
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
