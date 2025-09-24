import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';
import { Previo } from './components/previo/previo';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    NavbarComponent,
    Previo,
    Skills,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
}
