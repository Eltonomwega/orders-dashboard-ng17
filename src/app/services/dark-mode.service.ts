import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initializeDarkMode();
  }

  private initializeDarkMode(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.darkMode = localStorage.getItem('darkMode') === 'true';
      this.updateDarkModeClass();
    }
  }

  toggleDarkMode(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', String(this.darkMode));
      this.updateDarkModeClass();
    }
  }

  private updateDarkModeClass(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}