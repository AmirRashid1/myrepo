import { Component,EventEmitter, Input } from '@angular/core';


@Component({
  selector:'app-emmit',
  template:`
<button class="btn btn-primary" (click)="valuecomp()">Click me</button>
{{counter}}
  `
})

export class emmitComponent{

  @Input() obj=new EventEmitter();
  counter=0
  valuecomp(){
    this.counter=this.counter+1;
    this.obj.emit(this.counter);
    console.log(this.counter);

  }
}
