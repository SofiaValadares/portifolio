import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-info-university',
  imports: [],
  templateUrl: './card-info-university.component.html',
  styleUrl: './card-info-university.component.css'
})
export class CardInfoUniversityComponent {
    @Input() name: string = "";
    @Input() description: string = "";
}
