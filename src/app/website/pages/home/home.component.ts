// * Angular
import { Component, inject } from '@angular/core';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
// * Pipes
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
// * Components
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { PieGridComponent } from '../../../shared/components/pie-grid/pie-grid.component';

export interface ChipMenu {
  txt:string;
}

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    TranslatePipe,
    ChipComponent,
    PieGridComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  // * Inject 
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );

  chips:ChipMenu[] =[
    {
      txt:'Angular',
    },
    {
      txt:'UX UI Design',
    },
    {
      txt:'.NET',
    },
  ];

}
