import { Component } from '@angular/core';


@Component({
  selector:'pipe',
  template:`
  <h3>
{{book.title | uppercase}}<br />
{{book.pages | number}}<br />
{{book.price | currency:'USD'}}<br />
{{book.released | date:'longDate'}}<br />
{{book.copies_sold | number}}<br />
{{book.funds_raised | number:'6.4-6'}}<br />
{{book.released | date:'shortDate'}}<br />
{{book.released | date:'fullDate'}}<br />
{{book.released | date:'mediumDate'}}<br />
{{book.released | date:'full'}}<br />

  </h3>
  `
})
export class PipeComponent {
book={
    title:"Programming in Angular",
    pages:200,
    price:120,
    released: new Date (2022,5,9),
    copies_sold:15,
    funds_raised:600
}

}
