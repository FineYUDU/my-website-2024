import { Component } from '@angular/core';

@Component({
  selector: 'version',
  standalone: true,
  imports: [],
  template:`
  <p class="font_b1 font_regular color_inverted">
      {{version}}
  </p>
  `
})
export class VersionComponent {
  version:string = 'v1.0.0'
}
