// * Angular
import { Component, ElementRef, HostListener, Output, inject } from '@angular/core';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
// * Pipe
import { TranslatePipe } from '../../pipes/translate.pipe';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';

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
  // * Inject Dependencies
  public el = inject( ElementRef );
  public ts = inject( TranslateService );
  public ls = inject( LocalStorageService );

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    // Check if the click was inside the div with class .main-cont
    if (!this.isClickInsideComponent(event)) {
      // When the click is outside of the .main-cont div
      this.dropdown = false;
    }
  }

  isClickInsideComponent(event: MouseEvent): boolean {
    // Get the reference to the div with class .main-cont
    const mainContElement = this.el.nativeElement.querySelector('.main-cont');
    // Check if the click target is inside the .main-cont div
    return mainContElement.contains(event.target as Node);
  }
  
  // * Rotate
  dropdown:boolean = false;
  // * Open Modal
  openDropdown() {
    this.dropdown = !this.dropdown;
  }

}
