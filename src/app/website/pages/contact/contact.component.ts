// * Angular
import { Component, inject } from '@angular/core';
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// * Components
import { InputFieldComponent } from '@shared/components/input-field/input-field.component';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [
    InputFieldComponent,
    TranslatePipe,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {
  // * @Injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );

}
