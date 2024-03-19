// * Angular
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
import { CommonModule } from '@angular/common';
import { MenuNav } from '../navbar/navbar.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslatePipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() menuNav:MenuNav[] = [];
  @Input() isOpenMenu!:boolean;
  @Output() closeMenuEvent: EventEmitter<void> = new EventEmitter<void>();

  // * @Injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public router = inject( Router );

  closeMenu() {
    this.closeMenuEvent.emit();
  }

}
