import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import fs from 'node:fs';

export function readDb(dbFilePath = '../../../assets/json_db/db.json') {
  const data = fs.readFileSync(dbFilePath, 'utf-8')
  return JSON.parse(data)
}

export function writeDb(obj: {}, dbFilePath = '../../../assets/json_db/db.json') {
  if (!obj) {
    return ('Please provide data to save')
  }

  try {
    fs.writeFileSync(dbFilePath, JSON.stringify(obj))
    return ('Save successful')
  } catch (err) {
    return (`Save failed ${err}`)
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DbFunctionalModule {

}
