// * Angular
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
// * Services
import { TranslateService } from '../../../core/services/translate.service';
import { LocalStorageService } from '../../../core/services/localstorage.service';
// * Pipe
import { TranslatePipe } from '../../pipes/translate.pipe';
// * Components
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { TranslateSwitchComponent } from '../translate-switch/translate-switch.component';
import { MenuMovileComponent } from '../menu-movile/menu-movile.component';

// * Interfaces
export interface MenuNav {
  txt:string;
  router?:string;
  icon:string;
  close?:boolean;
}

@Component({
  selector: 'navbar-menu',
  standalone: true,
  imports: [
    RouterModule,
    ThemeSwitchComponent,
    TranslatePipe,
    TranslateSwitchComponent,
    MenuMovileComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // * @Injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  // * @Params
  isOpenMenu:boolean = true;
  
  menuNav:MenuNav[] =[
    {
      txt:'menu.home',
      icon:'home',
      router:'home',
      close:true,
    },
    {
      txt:'menu.about',
      icon:'about',
      router:'about',
      close:true,
    },
    {
      txt:'menu.contact',
      icon:'contact',
      router:'contact',
      close:true,
    },
  ];

  closeMenu() {
    this.isOpenMenu = !this.isOpenMenu;
    console.log('Parent', this.isOpenMenu);
  }

}
