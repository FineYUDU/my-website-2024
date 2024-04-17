// * Angular
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'theme-switch',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css'
})
export class ThemeSwitchComponent {
  // * @Injections
  public themeService = inject( ThemeService );
  public ls = inject( LocalStorageService );
}
