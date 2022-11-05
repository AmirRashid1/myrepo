import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name:'newpipe'
})

export class NewPipe implements PipeTransform {
  transform(value: String) {
if(value.length>8){
  return "accepted";
}

let newvalue="Angular";
return newvalue;
}

}
