// * Angular
import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LocalStorageService } from '@services/localstorage.service';
import { TranslateService } from '@services/translate.service';
// * Components
import { InputFieldComponent } from '@shared/components/input-field/input-field.component';
import { TextareaFieldComponent } from '@shared/components/textarea-field/textarea-field.component';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [
    InputFieldComponent,
    NgOptimizedImage,
    TextareaFieldComponent,
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
