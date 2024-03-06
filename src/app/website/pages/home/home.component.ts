// * Angular
import { Component } from '@angular/core';
// * Services
import { TranslateService } from '../../../core/services/translate.service';
// * Pipes
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
// * Components
import { ChipComponent } from '../../../shared/components/chip/chip.component';

export interface ChipMenu {
  txt:string;
}

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    TranslatePipe,
    ChipComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
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
