import { Component} from '@angular/core';

@Component({
  selector: 'app-eventName',
  template:`
  <h1 id="clk">Click Button</h1>
  <button (click)='fclick()'>Click</button>
  `
})

export class EventComponent{
  i=0;
 fclick(){
    this.i++;
    console.log("Button Clicked",this.i);
  }
}
