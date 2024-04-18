// * Angular
import { Component, Input, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
// * Pipe
import { TranslatePipe } from '../../pipes/translate.pipe';
// * Interfaces
import { Menu } from '@models/index.interfaces';
// * Components
import { MenuMovileComponent } from '../menu-movile/menu-movile.component';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { TranslateSwitchComponent } from '../translate-switch/translate-switch.component';
@Component({
  selector: 'navbar-menu',
  standalone: true,
  imports: [
    MenuMovileComponent,
    NgOptimizedImage,
    RouterModule,
    ThemeSwitchComponent,
    TranslatePipe,
    TranslateSwitchComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // * @Inputs
  @Input() menuNavigation:Menu[] = [];
  // * @injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public router = inject( Router );
  // * @params
  isOpenMenu:boolean = false;

  closeMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

}
