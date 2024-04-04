// * Angular
import { Component, Input } from '@angular/core';

// * Interfaces
export interface ChipMenu {
  txt:string;
}

@Component({
  selector: 'chip',
  standalone: true,
  imports: [],
  template:`
  <!-- ? MAIN CONTAINER -->
  <div class="main-cont">
      @for ( chip of chips ;track $index;) {
        <!-- TXT -->
      <span class="font__weight--medium font__size--c2 font__color--tertiary" >
          {{ chip.txt }}
      </span>  
      }
  </div>
  `,
  styles:`
  /* ? MAIN CONTAINER */
  .main-cont {
      display: flex;
      gap: var(--spacing-xs);
  }
  /* TXT */
  span {
      border: .1125rem solid var(--fd-color-bg-quaternary);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--radius-full);
  }
  span:hover {
    background-color:var(--fd-color-bg-quaternary);
    cursor:pointer;
  }
  `
})
export class ChipComponent {
  @Input() chips:ChipMenu[]=[];

}
