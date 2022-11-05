import { Component } from '@angular/core';

@Component({
  selector: 'app-clazzs',
  template:`
  <h1  [class.bg-warning]='bg'>
      <h1 [class.text-primary]='clr'>
        Hlo angular
      </h1>
      <button [class.btn]='bt' [class.btn-secondary]='sc'>Click me</button>
  </h1>
  `
})


export class  clazzsComponent{
  bg=true;
  bt=true;
  sc=true;
  clr=true;
}
