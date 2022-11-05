import { Component } from '@angular/core';


@Component({
  selector: 'app-bind',
  template: `
<div [ngStyle]="{'background':'#ff00000a',
'width':'100%',
'height':'50rem',
'border-radius':'12px'}">
<div [ngStyle]="{'margin':' auto','background':'#6676bb','position': 'relative','top': '5rem','width':'23rem','height':'25rem','text-align':'center','border-radius':'12px','box-shadow': '5px 5px 5px #6060a5'}">
<label [ngStyle]="{'font-size':'2rem'}">Registration form</label>
<form action="" [ngStyle]="{'position': 'relative','top': '1rem'}">
<span  > Username:</span> <input [type]='txt' [ngClass]="{'form-control':true}"  [(ngModel)]='username' (keyup.capslock)="name()" [ngModelOptions]="{standalone: true}" ><br>
<span> Password:</span><input [ngClass]="{'form-control':true}"  (keyup.a)="my($event)" [(ngModel)]='password' (keyup.capslock)="pass()" [ngModelOptions]="{standalone: true}"><br>
<span> Number:</span><input [ngClass]="{'form-control':true}"  type="number" [(ngModel)]='number' (keyup.capslock)="num()" [ngModelOptions]="{standalone: true}"><br>

<button (click)="bt()" type="submit"

[ngClass]="
{
  'btn':true,
'text-center':true,
'btn-success':true
}
">
SUBMIT
</button>

<button  (click)="res()" type="reset" [ngClass]="{
'btn':true,
'text-center':true,
'btn-danger':true

}"

>RESET</button>
</form>
</div>
</div>

`


})

export class bindCompo {
  txt='text';

  brdr = 4;


  k = 0;

  bt() {
    this.k++;
    console.log("Submit Successfully", this.k);
  }

  username = "Enter Username!";
  password = "Enter password!";
  number = +91786238763;

  pass() {
    console.log("", this.password);
  }

  name() {
    console.log(" ", this.username);
  }


  num() {
    console.log("", this.number);
  }


  res() {
    console.log("Reset Successfully");

  }
  my($event: any) {
    console.log("You Pressed a" + $event);
  }

}
