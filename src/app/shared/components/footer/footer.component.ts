// * Angular
import { Component, inject } from '@angular/core';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
// * Components
import { VersionComponent } from '../version/version.component';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RouterModule } from '@angular/router';
export interface MenuNav {
  txt:string;
  router:string;
  icon:string;
}

@Component({
  selector: 'footer-menu',
  standalone: true,
  imports: [
    VersionComponent,
    TranslatePipe,
    RouterModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // * Inject Translate Service
  public ts = inject( TranslateService );
  // * Inject LocalStorage Service
  public ls = inject( LocalStorageService );
  // * Company name
  company:string = 'Fine Dev';

  menuNav:MenuNav[] =[
    {
      txt:'menu.home',
      icon:'home',
      router:'home',
    },
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
