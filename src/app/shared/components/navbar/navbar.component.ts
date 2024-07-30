import { Component, Input, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';

import { TranslatePipe } from '../../pipes/translate.pipe';

import { Menu } from '@models/index.interfaces';

import { MenuMovileComponent } from '../menu-movile/menu-movile.component';
import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';
import { TranslateSwitchComponent } from '../translate-switch/translate-switch.component';
@Component({
  selector: 'navbar-menu',
  standalone: true,
  imports: [
    MenuMovileComponent,
    NgOptimizedImage,
    RouterModule,
    ToggleThemeComponent,
    TranslatePipe,
    TranslateSwitchComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() menuNavigation:Menu[] = [];

  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public router = inject( Router );

  isOpenMenu:boolean = false;

  closeMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

}
