import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysPipe'
})
export class KeysPipePipe implements PipeTransform {

  transform(value, args:string[]) : any {
    let keys = [];
    if(value !== null) {
      for (let key in value[0]) {
        keys.push({key: key, value: value[0][key]});
      }
      return keys;
    }
  }

}
