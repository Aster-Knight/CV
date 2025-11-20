import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isLightMode = new BehaviorSubject<boolean>(false);
  isLightMode$ = this.isLightMode.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedTheme = localStorage.getItem('isLightMode');
      this.isLightMode.next(storedTheme === 'true');
      this.updateBodyClass();
    }
  }

  toggleTheme(): void {
    this.isLightMode.next(!this.isLightMode.getValue());
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('isLightMode', this.isLightMode.getValue().toString());
      this.updateBodyClass();
    }
  }

  private updateBodyClass(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isLightMode.getValue()) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }
  }
}
