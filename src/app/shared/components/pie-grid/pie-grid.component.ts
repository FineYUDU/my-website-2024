// * Angular
import { Component, Input } from '@angular/core';

@Component({
  selector: 'pie-grid',
  standalone: true,
  imports: [],
  templateUrl: './pie-grid.component.html',
  styleUrl: './pie-grid.component.css'
})
export class PieGridComponent {
  @Input() pieGrid!:string;
  @Input() percent!:number;
}
