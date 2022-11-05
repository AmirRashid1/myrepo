import { Component } from '@angular/core';

@Component({
  selector: 'app-inpt',
  template: `
  <div >
    <input #d (keyup.enter)="hi(d.value)" class="form-control " style="width:40rem ;" >
    <button (click)="hi(d.value)" class="btn btn-warning">Click</button>
    <h1>{{val}}</h1>
  </div>
`
})

export class AppInpt {

  val: any;
  hi(d: any) {
    this.val = d;
    console.log("Value is:  " + d);

  }
}
