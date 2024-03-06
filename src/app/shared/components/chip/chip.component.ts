// * Angular
import { Component, Input } from '@angular/core';
export interface ChipMenu {
  txt:string;
}

@Component({
  selector: 'chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.css'
})
export class ChipComponent {
  @Input() chips:ChipMenu[]=[];
}
