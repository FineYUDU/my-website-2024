// * Angular
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // * @params
  theme:string;
  toggle:boolean;

  constructor() { 
    this.theme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', this.theme === 'dark');
    document.body.classList.toggle('light-mode',this.theme === 'light');

    const theme = localStorage.getItem('theme');

    if(localStorage.getItem('theme') === 'dark') this.toggle = true
    else this.toggle = false

    if(!theme) {
      localStorage.setItem('theme', 'light');
    }
  }

  changeMode(theme:string): void {
    this.theme = theme;
    this.theme = this.theme === 'light' ? 'light' : 'dark';

    document.body.classList.toggle('dark-mode', this.theme === 'dark');
    document.body.classList.toggle('light-mode', this.theme === 'light');
    localStorage.setItem('theme', this.theme);

  }

  toggleTheme(): void {
    this.toggle = !this.toggle;
    const theme = this.toggle ? 'dark' : 'light';
  
    localStorage.setItem('theme', theme);
  
    document.body.classList.toggle('dark-mode', this.toggle);
    document.body.classList.toggle('light-mode', !this.toggle);
  }
  
}
