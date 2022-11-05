import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
  <div *ngFor="let az of arr">
    <table border="3" >

      <tr>
        <th>column 1</th>

      </tr>

      <tr>
        <td>{{az}}</td>


      </tr>
    </table>
  </div>

  `

})

export class TableComponenet{
  arr=[1,2,3];
}
