import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideText'
})
export class HideTextPipe implements PipeTransform {

  transform(value: string): string {
    return '*'.repeat(value.length);
  }

}
