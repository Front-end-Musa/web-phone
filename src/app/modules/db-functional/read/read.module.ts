import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
const { writeDb } = require('../db-functional.module')

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReadModule {
  obj = {
    musa: 'he is sooooooooooo cool'
  }
  constructor() {
    writeDb(this.obj)
  }
}
