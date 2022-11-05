import {Component} from '@angular/core'
@Component({
  selector:'temp',
  template:`
<input #school (keyup.enter)="mykey(school.value)" >
<h1>{{val}}</h1>
  `

})
export class tempCompo{

  val:any;
  mykey(school:any){
    this.val =school;
    console.log(" "+school)
  }

}
