// * Angular
import { Component, Input, inject } from '@angular/core';
// * Pipes
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
// * Services
import { TranslateService } from '../../../../core/services/translate.service';

export interface Education {
  date:string;
  title:string;
  txt:string;
}

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
  @Input() educationBlock:Education[] = []

  // * @Injections
  public translateService = inject( TranslateService );
}
