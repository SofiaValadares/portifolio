import { Component } from '@angular/core';
import {PhotoComponent} from './photo/photo.component';

@Component({
  selector: 'app-home',
  imports: [
    PhotoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
