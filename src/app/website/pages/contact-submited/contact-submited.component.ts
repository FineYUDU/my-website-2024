// @angular
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
// @services
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'app-contact-submited',
  standalone: true,
  imports: [
    TranslatePipe,
    RouterModule,
  ],
  templateUrl: './contact-submited.component.html',
  styleUrl: './contact-submited.component.css'
})
export default class ContactSubmitedComponent {
  public localStorageService = inject( LocalStorageService );
  public translateService = inject( TranslateService );
}
