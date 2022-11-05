import { Component } from '@angular/core';

@Component({
  selector: 'app-clazz',
  template: `
  <h1>
    <button
     [class.btn]='cl1'
     [class.btn-primary]='cl2'
     [class.active]='one'>Button</button>
  </h1>
  
  `

})

export class clazzComponent {
  cl1 = true;
  cl2 = true;
  one = true;

}
