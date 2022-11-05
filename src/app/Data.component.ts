import { Component } from '@angular/core';

@Component({
  selector: 'Data',
  template: `<h1>
    <!-- {{arr}} -->
    {{obj.Name}}
    {{obj.Section}}
    {{obj.Program}}

    </h1>`
})

export class Data {
  // arr=["One", "Two", "Three", "Four"];
  obj = {
    "Name": "ABC",
     "Section": "DE50C",
     "Program":"UG"
    }

}
