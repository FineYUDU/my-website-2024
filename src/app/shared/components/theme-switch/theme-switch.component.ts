// * Angular
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { LocalStorageService } from '../../../core/services/localstorage.service';

@Component({
  selector: 'theme-switch',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css'
})
export class ThemeSwitchComponent {

  public themeService = inject( ThemeService );
  public ls = inject( LocalStorageService );

  // selected:boolean = false;
  // toggleTheme() {
  //   console.log(this.selected)
  //   this.selected = !this.selected;
  // }

}
