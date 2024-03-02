import { Component } from '@angular/core';
import { TranslateService } from '../../../core/services/translate.service';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {


}
