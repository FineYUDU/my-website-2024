// @angular
import { Component } from '@angular/core';

@Component({
  selector: 'version',
  standalone: true,
  imports: [],
  template:`
  <p class="
        font__size--b2 
        font__weight--regular 
        font__color--tertiary"
      >
      {{version}}
  </p>
  `
})
export class VersionComponent {
  //  @params
  version:string = 'v1.0.5'
}
