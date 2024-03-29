// * Angular
import { Component } from '@angular/core';

@Component({
  selector: 'version',
  standalone: true,
  imports: [],
  template:`
  <p class="font__size--b1 font__weight--regular font__color--tertiary">
      {{version}}
  </p>
  `
})
export class VersionComponent {
  // * @Params
  version:string = 'v1.0.0'
}
