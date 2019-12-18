import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valuesArray'
})
export class ValuesArrayPipe implements PipeTransform {

  transform(objects : any = []) {
    return Object.values(objects);
  }
}
