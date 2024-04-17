// * Angular
import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
// * Components
import { VersionComponent } from '../version/version.component';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RouterModule } from '@angular/router';

// * Interfaces
export interface MenuNav {
  txt:string;
  router:string;
  icon:string;
}

@Component({
  selector: 'footer-menu',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterModule,
    TranslatePipe,
    VersionComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // * @Injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  // * @Params
  companyName:string = 'Fine Dev';

  menuNav:MenuNav[] =[
    {
      txt:'menu.home',
      icon:'home',
      router:'home',
    },
    // {
    //   txt:'menu.about',
    //   icon:'about',
    //   router:'about',
    // },
    // {
    //   txt:'menu.contact',
    //   icon:'contact',
    //   router:'contact',
    // },
  ]

}
