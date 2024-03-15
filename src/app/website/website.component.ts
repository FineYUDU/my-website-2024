// * Angular
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// * Components
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export default class WebsiteComponent {}
