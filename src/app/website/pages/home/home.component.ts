// * Angular
import { Component, inject, ElementRef } from '@angular/core';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
// * Pipes
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
// * Components
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { Education, EducationComponent } from '../../components/home-components/education/education.component';
import { ExperienceComponent } from '../../components/home-components/experience/experience.component';
import { PieGridComponent } from '../../../shared/components/pie-grid/pie-grid.component';
import { UserCardComponent } from '../../components/home-components/user-card/user-card.component';

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
    ChipComponent,
    EducationComponent,
    ExperienceComponent,
    PieGridComponent,
    TranslatePipe,
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

  education:Education[] = [
    {
      title:'home.education.block-1.title',
      date:'home.education.block-1.date',
      txt:'home.education.block-1.txt',
    },
    {
      title:'home.education.block-2.title',
      date:'home.education.block-2.date',
      txt:'home.education.block-2.txt',
    },
    {
      title:'home.education.block-3.title',
      date:'home.education.block-3.date',
      txt:'home.education.block-3.txt',
    },
  ]

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
      img:'NET'
    },
    {
      img:'bootstrap'
    },
    {
      img:'CSharp'
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
  ];
  tools:ImgScroll[] = [
    {
      img:'vscode'
    },
    {
      img:'vs'
    },
    {
      img:'figma'
    },
    {
      img:'git'
    },
    {
      img:'postman'
    },
    {
      img:'jira'
    },
    {
      img:'slack'
    },
    {
      img:'sql-server'
    },
  ];

}
