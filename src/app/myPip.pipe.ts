import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myPip"
})


export class myPip implements PipeTransform{
  transform(value: String, limit?:number) {
    if(!value){
      return null;
    }

    let actualLimit=(limit) ? limit: 5;
    return value.substring(0, actualLimit)+'......';
  }
}

