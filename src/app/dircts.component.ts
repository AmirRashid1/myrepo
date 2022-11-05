import { Component } from '@angular/core';

@Component({
  selector: 'app-drctif',
  template: `
  <div *ngIf="arr.length>0">
  {{ arr.length}} values
  </div>
  <div *ngIf="arr.length==0">
array is empty
  </div>
  `
})

export class dirctsComponent {

  arr = [1, 2, 3, 4, 5]
}
