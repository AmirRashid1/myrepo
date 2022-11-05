import { Component } from '@angular/core';



@Component({
  selector:'myPip',
  template:`
  <h1>
  {{someText | myPip:12}}
  {{someText1 | myPip}}</h1>
  `
})

export class MypipeComponent{
  someText="Hlo this is the demo";
  someText1="MyName";
}
