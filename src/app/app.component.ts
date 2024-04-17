// * Angular
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// * Services
import { ThemeService } from './core/services/theme.service';
import { TranslateService } from './core/services/translate.service';
import { ThemeSwitchComponent } from '@shared/components/theme-switch/theme-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    ThemeSwitchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // @injections
  private translateService = inject (TranslateService); 
  private themeService = inject(ThemeService)



}
