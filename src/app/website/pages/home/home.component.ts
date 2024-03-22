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
export interface Logos {
  img:string;
  txt:string;
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

  stacks:Logos[] = [
    {
      img:'angular',
      txt:'angular',
    },
    {
      img:'NET',
      txt:'NET',
    },
    {
      img:'bootstrap',
      txt:'bootstrap',
    },
    {
      img:'prime-ng',
      txt:'primeng',
    },
    {
      img:'angular-material',
      txt:'angular material',
    },
    {
      img:'CSharp',
      txt:'C#'
    },
    {
      img:'html',
      txt:'html',
    },
    {
      img:'css',
      txt:'css',
    },
    {
      img:'js',
      txt:'javascript',
    },
    {
      img:'ts',
      txt:'typescript',
    },
    {
      img:'sql',
      txt:'sql',
    },
    {
      img:'dart',
      txt:'dart',
    },
  ];
  tools:Logos[] = [
    {
      img:'vscode',
      txt:'vscode',
    },
    {
      img:'vs',
      txt:'visual studio',
    },
    {
      img:'figma',
      txt:'figma',
    },
    {
      img:'git',
      txt:'git',
    },
    {
      img:'postman',
      txt:'postman',
    },
    {
      img:'jira',
      txt:'jira',
    },
    {
      img:'slack',
      txt:'slack',
    },
    {
      img:'sql-server',
      txt:'sql server',
    },
  ];

}
