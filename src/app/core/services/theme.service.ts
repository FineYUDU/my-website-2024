import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnInit {
  openCheckbox:number = 0;
  theme:string;
  toggle:boolean;

  constructor() { 
    // * Initialize theme from localStorage or use 'light' as the default
    this.theme = localStorage.getItem('theme') || 'light';
    // * Toggle 'dark-mode' class based on the theme
    document.body.classList.toggle('dark-mode', this.theme === 'dark');
    // * Toggle 'light-mode' class based on the theme
    document.body.classList.toggle('light-mode',this.theme === 'light');

    const theme = localStorage.getItem('theme');

    // If else short
    if(localStorage.getItem('theme') === 'dark') this.toggle = true
    else this.toggle = false
  
    if(!theme) {
      // * Set the default theme as 'light' if it doesn't exist in localStorage
      localStorage.setItem('theme', 'light');
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // ? Change Mode
  changeMode(theme:string): void {
    this.theme = theme;
    // * Update the theme to the opposite of the current theme
    this.theme = this.theme === 'light' ? 'light' : 'dark';
    // * Toggle 'dark-mode' class based on the updated theme
    document.body.classList.toggle('dark-mode', this.theme === 'dark');
    // * Toggle 'light-mode' class based on the updated theme
    document.body.classList.toggle('light-mode', this.theme === 'light');
    // * Set the theme in localStorage
    localStorage.setItem('theme', this.theme);
    // * Checkbox open and close
    this.openCheckbox = 0;
  }

  toggleTheme(): void {
    // Cambia el valor de 'toggle' al valor opuesto del valor actual
    this.toggle = !this.toggle;
  
    // Define el tema según el valor de 'toggle'
    const theme = this.toggle ? 'dark' : 'light';
  
    // Actualiza el tema en localStorage
    localStorage.setItem('theme', theme);
  
    // Agrega o quita la clase 'dark-mode' en el body según el tema
    document.body.classList.toggle('dark-mode', this.toggle);
    // Agrega o quita la clase 'light-mode' en el body según el tema
    document.body.classList.toggle('light-mode', !this.toggle);
  
    // Si necesitas hacer algo más después de cambiar el modo, aquí puedes agregarlo
  }
  
  
}
