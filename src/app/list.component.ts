import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
  <h3 [style]="sty">
    <table [border]="brdr">
    <ol [attr.type]="strt">
      <li>Ordered List 1</li>
      <li>Ordered List 2</li>
      <ul [attr.type]="crle">
        <li>Unordered List 1 </li>
        <li>Unordered List 2 </li>

       <ol [attr.type]="typ">
         <li>Nested List 1 </li>
         <li>Nested List 2 </li>
        </ol>
        </ul>

        <li>Ordered List 3</li>
        <li>Ordered List 4</li>
      </ol>
      </table>
  </h3>
  `
})

export class ListComponent {
  sty = "display: flex; justify-content: center; background-color: green; width:15rem; margin:auto; color:white; box-shadow:#4dff00 2px 2px 4px 1px;";
  brdr = 4;
  strt = 'a';
  typ = 'i';
  crle = "square";

}
