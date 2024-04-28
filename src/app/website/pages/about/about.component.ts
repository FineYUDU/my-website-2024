// @angular
import { Component, ElementRef, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
// @pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
// @components
import { ChipComponent } from '@shared/components/chip/chip.component';
import { EducationComponent } from '../../components/home-components/education/education.component';
import { ExperienceComponent } from '../../components/home-components/experience/experience.component';
import { PieGridComponent } from '@shared/components/pie-grid/pie-grid.component';
import { UserCardComponent } from '../../components/home-components/user-card/user-card.component';
import { TranslateService } from '@services/translate.service';
import { LocalStorageService } from '@services/localstorage.service';
import { Education, Logos } from '@models/index.interfaces';

@Component({
  selector: 'about',
  standalone: true,
  imports: [
    ChipComponent,
    EducationComponent,
    ExperienceComponent,
    NgOptimizedImage,
    PieGridComponent,
    TranslatePipe,
    UserCardComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  // @injections 
  public elementRef = inject( ElementRef );
  public localStorageService = inject( LocalStorageService );
  public translateService = inject( TranslateService );

  education:Education[] = [
    {
      title:'home.education.block-2.title',
      date:'home.education.block-2.date',
      txt:'home.education.block-2.txt',
    },
    {
      title:'home.education.block-1.title',
      date:'home.education.block-1.date',
      txt:'home.education.block-1.txt',
    },
    {
      title:'home.education.block-3.title',
      date:'home.education.block-3.date',
      txt:'home.education.block-3.txt',
    },
  ]
  
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
      img:'flutter',
      txt:'flutter',
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
      img:'sass',
      txt:'sass',
    },
    {
      img:'js',
      txt:'javascript',
    },
    {
      img:'ts',
      txt:'typescript',
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
      img:'notion',
      txt:'notion',
    },
    {
      img:'npm',
      txt:'npm',
    },
    {
      img:'graphql',
      txt:'graph ql',
    },
    {
      img:'jasmine',
      txt:'jasmine',
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
