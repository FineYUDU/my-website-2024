// * Angular
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// * Interfaces
import { Menu } from '@models/index.interfaces';
// * Components
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  ],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export default class WebsiteComponent {
  menuNavigation:Menu[] =[
    {
      txt:'menu.home',
      icon:'home',
      router:'home',
      close:true,
    },
    {
      txt:'menu.about',
      icon:'about',
      router:'about',
      close:true,
    },
    {
      txt:'menu.contact',
      icon:'contact',
      router:'contact',
      close:true,
    },
  ];
}
