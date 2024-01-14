// * Angular
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface MenuNav {
  txt:string;
  router:string;
  icon:string;
}

@Component({
  selector: 'navbar-menu',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menuNav:MenuNav[] =[
    {
      txt:'home',
      icon:'home',
      router:'home',
    }

  ]

}
