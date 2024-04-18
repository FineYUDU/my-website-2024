// * Angular
import { Component, Input, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
// * Components
import { VersionComponent } from '../version/version.component';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RouterModule } from '@angular/router';
import { Menu } from '@models/index.interfaces';

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
    NgOptimizedImage,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // * @inputs
  @Input() menuNavigation:Menu[] = [];
  // * @injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  // * @params
  companyName:string = 'Fine Dev';
}
