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

export interface MenuNav {
  txt:string;
  router:string;
  icon:string;
}

@Component({
  selector: 'navbar-menu',
  standalone: true,
  imports: [
    RouterModule,
    ThemeSwitchComponent,
    TranslatePipe,
    TranslateSwitchComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // * Inject Translate Service
  public ts = inject( TranslateService );
  // * Inject LocalStorage Service
  public ls = inject( LocalStorageService );

  menuNav:MenuNav[] =[
    {
      txt:'menu.about',
      icon:'about',
      router:'about',
    },
    {
      txt:'menu.contact',
      icon:'contact',
      router:'contact',
    },

  ]

}
