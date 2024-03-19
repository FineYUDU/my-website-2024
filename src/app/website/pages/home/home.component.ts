// * Angular
import { Component, inject, ElementRef } from '@angular/core';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
// * Pipes
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
// * Components
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { PieGridComponent } from '../../../shared/components/pie-grid/pie-grid.component';
import { UserCardComponent } from '../../components/user-card/user-card.component';

export interface ChipMenu {
  txt:string;
}
export interface ImgScroll {
  img:string;
}

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    TranslatePipe,
    ChipComponent,
    PieGridComponent,
    ExperienceComponent,
    UserCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  // * @Injections 
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public elementRef = inject( ElementRef );

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

  stacks:ImgScroll[] = [
    {
      img:'angular'
    },
    {
      img:'figma'
    },
    {
      img:'NET'
    },
    {
      img:'html'
    },
    {
      img:'css'
    },
    {
      img:'js'
    },
    {
      img:'ts'
    },
    {
      img:'CSharp'
    },
    {
      img:'bootstrap'
    },
    {
      img:'git'
    },
  ];

}
