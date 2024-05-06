// * Angular
import { Component, Input, inject } from '@angular/core';
// * Pipes
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
// * Services
import { TranslateService } from '../../../../core/services/translate.service';
// * Interfaces
import { Education } from '@models/index.interfaces';

@Component({
  selector: 'education',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  // * @inputs
  @Input() educationBlock:Education[] = []
  // * @injections
  public translateService = inject( TranslateService );
}
