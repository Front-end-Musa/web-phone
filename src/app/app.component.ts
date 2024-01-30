import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { InfoComponent } from './components/info/info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ChatComponent,
    InfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  time: Date = new Date()
  hours: number = this.time.getHours()
  minutes: number = this.time.getMinutes()
  mainScreen: Element | null = ViewChild('main-screen')

  OpenApp(component: Component): void {
    if (this.mainScreen != null) {
      // this.mainScreen.innerHTML = component
  }
  }
}
