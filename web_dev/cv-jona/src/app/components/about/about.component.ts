import { Component } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-about',
  imports: [TruncatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}