// * Angular
import { Component, inject } from '@angular/core';
// * Services
import { TranslateService } from '../../../core/services/translate.service';
// * Pipes
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { LocalStorageService } from '../../../core/services/localstorage.service';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  // * @Injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );

}
