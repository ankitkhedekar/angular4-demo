import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddEven'
})
export class OddEvenPipe implements PipeTransform {

  transform(value: number, additional: string): string {
      console.log('additional param is:', additional);
      if(value%2 === 0) {
          return value + "+";
      } else {
          return value + "-";
      }

  }

}
