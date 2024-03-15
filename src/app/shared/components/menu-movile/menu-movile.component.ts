// * Angular
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
// * Pipes
import { TranslatePipe } from '../../pipes/translate.pipe';
// * Components
import { TranslateService } from '../../../core/services/translate.service';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { MenuNav } from '../navbar/navbar.component';

@Component({
  selector: 'menu-movile',
  standalone: true,
  imports: [
    RouterModule,
    TranslatePipe,
    CommonModule,
  ],
  templateUrl: './menu-movile.component.html',
  styleUrl: './menu-movile.component.css'
})
export class MenuMovileComponent {
  @Input() menuNav:MenuNav[] = [];
  @Input() isOpenMenu!:boolean;
  @Output() closeMenuEvent: EventEmitter<void> = new EventEmitter<void>();

  // * @Injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  // * @Params
  isDropdownLangOpen:boolean = false;
  isDropdownThemeOpen:boolean = true;
  get GetLang() {
    return localStorage.getItem('lang') || '';
  } 

  closeMenu() {
    this.isDropdownLangOpen = false;
    this.closeMenuEvent.emit();
  }
  openLangDropdown() {
    this.isDropdownLangOpen = !this.isDropdownLangOpen;
    console.log(this.isDropdownLangOpen)
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
