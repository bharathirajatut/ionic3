import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FirstCapsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'firstCaps',
})
export class FirstCapsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    return value.charAt(0).toUpperCase();
  }
}
