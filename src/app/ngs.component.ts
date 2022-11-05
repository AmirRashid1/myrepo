import { Component } from '@angular/core';


@Component( {

  selector: 'app-ngs',
  template:`
<input [(ngModel)]='section' (keyup.shift)="shows()">
`
})

export class ngsCompo{
  section="D2006"
  shows(){
    console.log(" ",this.section);
  }
  
}
