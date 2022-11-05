import { Component } from '@angular/core';

@Component({
  selector: 'app-dirt',
  template: `
<h1 [ngSwitch]="case">
<div *ngSwitchCase="1">Angular</div>
<div *ngSwitchCase="2">Bootstrap</div></h1>
`
})

export class dirComponent {

  case=1;
}
