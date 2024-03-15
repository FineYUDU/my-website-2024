// * Angular
import { Component, inject } from '@angular/core';
// * Pipes
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { TranslateService } from '../../../core/services/translate.service';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [
    TranslatePipe,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  // * @Injections
  public translateService = inject( TranslateService );
  // * @Params

}
