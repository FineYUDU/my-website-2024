// * Angular
import { Component, ElementRef, HostListener, inject } from '@angular/core';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
// * Pipes
import { TranslatePipe } from '../../pipes/translate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'translate-switch',
  standalone: true,
  imports: [
    TranslatePipe,
    CommonModule,
  ],
  templateUrl: './translate-switch.component.html',
  styleUrl: './translate-switch.component.css'
})
export class TranslateSwitchComponent {
  // * @Injections
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public el = inject( ElementRef );
  // * @Params
  isDropdownOpen:boolean = false;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen = false : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this.el.nativeElement.querySelector('.main-cont');
    return mainContElement.contains(event.target as Node);
  }
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
