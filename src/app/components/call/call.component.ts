import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent {
  numbersList: any[] = [];
  outputEl = ViewChild('#output')

  addNumber(num: number) {
    this.numbersList.push(num);
    
  }

  popNumber() {
    this.numbersList.pop();
  }

  logPlusInsteadOfZero() {
    this.numbersList.push('+');
    
  }
}
