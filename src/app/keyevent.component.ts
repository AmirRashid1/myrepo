import { Component} from '@angular/core';

@Component({
  selector: 'app-keyevent',
  template:`
<h1>key presses</h1>
<input (keyup.a)="my($event)">

`

})

export class keyeventCompo{
  my($event: any){
    console.log("onKeyPress: " + $event);
  }
}



