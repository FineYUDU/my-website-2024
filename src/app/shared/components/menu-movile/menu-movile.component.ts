// * Angular
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
// * Pipes
import { TranslatePipe } from '../../pipes/translate.pipe';
// * Components
import { TranslateService } from '../../../core/services/translate.service';
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { ThemeService } from '../../../core/services/theme.service';
import { Menu } from '@models/index.interfaces';

@Component({
  selector: 'menu-movile',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './menu-movile.component.html',
  styleUrl: './menu-movile.component.css'
})
export class MenuMovileComponent {
  @Input() menuNavigation:Menu[] = [];
  @Input() isOpenMenu!:boolean;
  @Output() closeMenuEvent: EventEmitter<void> = new EventEmitter<void>();

  // * @Injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public themeService = inject( ThemeService );
  // * @Params
  isDropdownLangOpen:boolean = false;
  isDropdownThemeOpen:boolean = false;
  get GetLang() {
    return localStorage.getItem('lang') || '';
  } 

  closeMenu() {
    this.isDropdownLangOpen = false;
    this.isDropdownThemeOpen = false;
    this.closeMenuEvent.emit();
  }
  openLangDropdown() {
    this.isDropdownLangOpen = !this.isDropdownLangOpen;
    this.isDropdownThemeOpen = false;
    console.log(this.isDropdownLangOpen)
  }
  openThemeDropdown() {
    this.isDropdownThemeOpen = !this.isDropdownThemeOpen;
    this.isDropdownLangOpen = false;
    console.log(this.isDropdownThemeOpen)
  }
  changeLang(lang:string){
    if(lang === 'es') {
      console.log('es');
      localStorage.setItem('lang',lang)
    } else {
      console.log('en');
      localStorage.setItem('lang','en')
    }
  }

}
