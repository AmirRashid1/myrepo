import { Component } from '@angular/core';


@Component({
  selector:'app-ifs',
  template:`
  <div *ngIf="person.name=='ABC'">
    {{person.name}} is authorized user
  </div>

  `

})

export class AppifsComponent{
  person={
    name:'ABC',
    age:23,
    address:'pb'
  }
}
