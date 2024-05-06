// @angular
import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
// @services
import { LocalStorageService } from '../../../../core/services/localstorage.service';
import { TranslateService } from '../../../../core/services/translate.service';
// @pipes
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  // @injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );

}
