import { Component } from '@angular/core';

@Component({
selector:'app-fors',
template:`
<div *ngFor="let wa of arr">
 Hlo {{wa}}
</div>



`

})

export class forsCompo{
  arr=["Shubhum"]
}
