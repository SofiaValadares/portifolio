import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AboutMeComponent} from './component/about-me/about-me.component';
import {SideBarComponent} from './component/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AboutMeComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio';
}
