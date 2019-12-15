import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterField'
})
export class FilterByFieldPipe implements PipeTransform {

  transform(arr: {}[], fieldName:string, value:any): {}[] {
    console.log('filterField', fieldName ,value);
    if (arr && 
        arr.length && 
        arr.length > 0 && 
        fieldName && 
        value) {
      return arr.filter(
        item => item[fieldName].includes(value))
    }
    return arr;
  }

}
