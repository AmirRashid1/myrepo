import { Component } from '@angular/core';


@Component({
  selector: 'app-prop',
  template: `
    <h1>
  <table [border]="brdr">
    <tr >
      <th [attr.colspan]='cols'>Some Data Heading</th>
      <!-- <th>Some Data Value</th> -->
    </tr>

    <tr>
      <td [attr.rowspan]='rows'>Some Data Value</td>
      <td>Some Data Value 2</td>

    </tr>

    <tr>

    </tr>
  </table>
  </h1>
  `
})

export class PropComponent{
  brdr=2;
  cols=2;
  rows=4;



}
