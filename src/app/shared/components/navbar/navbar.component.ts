// * Angular
import { Component, Input, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  @Input() menuNav:MenuNav[] = [];

  // * @Injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public router = inject( Router );
  // * @Params
  isOpenMenu:boolean = false;
  
  goToPart(fragment:any) {
    this.router.navigateByUrl('fine-dev/' + fragment).then(() => {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
  
  closeMenu() {
    this.isOpenMenu = !this.isOpenMenu;
    console.log('Parent', this.isOpenMenu);
  }

}
