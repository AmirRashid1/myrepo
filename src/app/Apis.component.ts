import { Component, Input } from '@angular/core';


@Component({
selector:'bank-account',
template:`
Bank Name:{{bankName}}
Account Id:{{id}}
`

})

export class BankComponent{
  @Input() bankName:string | undefined;
  @Input('account-id') id:string | undefined;
}


@Component({
  selector:'appll',
  template:`
  <bank-account bankName="RBC" account-id="5633"></bank-account>
  `
})

export class AppllComponent{}
