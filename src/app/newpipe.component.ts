import { Component } from '@angular/core';

@Component({
  selector:'newPipe',
  template:`
  {{temp | myPip}}
  {{temp1 | myPip}}
  `
})

export class NewPipecomp{
  temp="hlo this is my temp";
  temp1="myname";
}
