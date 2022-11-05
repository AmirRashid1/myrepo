
import { Component } from "@angular/core";
@Component({
selector:'app-cls',
template:`
<div [ngStyle]="{'background':'red', 'width':'50rem', 'height':'30rem','border-radius':'12px'}">
<button [ngClass]="{
'btn':true,
'text-center':true,
'btn-primary':true,
'active':isActive,
'state':isNotActive
}">Button</button></div>

`



})

export class ClsCompo{
  isActive=true;
  isNotActive=false;
}
