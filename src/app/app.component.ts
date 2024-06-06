// @angular
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @services
import { ThemeService } from './core/services/theme.service';
import { TranslateService } from './core/services/translate.service';
import { UpdateCheckService } from '@services/update-check.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // @injections
  private themeService = inject(ThemeService);
  private translateService = inject (TranslateService); 
  private updateCheckServuce = inject ( UpdateCheckService ); 
  constructor(){
    this.updateCheckServuce.checkForUpdate();
  }

}
