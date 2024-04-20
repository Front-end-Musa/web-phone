import { Component, ViewChild } from '@angular/core';
import { readDb, writeDb } from '../../modules/db-functional/db-functional.module';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  btn: Element = ViewChild('#btn')
  btn1: Element = ViewChild('#write-btn')
  outputEl: Element = ViewChild('#json-content')
  inputEl: Element = ViewChild('#sending-input')
  inputObj: any = {
    message: 'NULL'
  }
  constructor() {
    this.btn.addEventListener('click', () => {
      this.outputEl.innerHTML = readDb()
    })
    this.btn1.addEventListener('click', () => {
      this.inputObj.message = this.inputEl.nodeValue
      writeDb(JSON.stringify(this.inputObj))
    })
  }
}
