import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  time: Date = new Date()
  hours: number = this.time.getHours()
  minutes: number = this.time.getMinutes()
}
