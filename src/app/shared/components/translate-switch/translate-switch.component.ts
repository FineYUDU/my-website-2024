// * Angular
import { Component, inject } from '@angular/core';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
// * Pipe
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
  // * Inject Dependencies
  public ts = inject( TranslateService );
  public ls = inject( LocalStorageService );
  // * Rotate
  dropdown:boolean = false;
  // * Open Modal
  openDropdown() {
    this.dropdown = !this.dropdown;
  }

}
