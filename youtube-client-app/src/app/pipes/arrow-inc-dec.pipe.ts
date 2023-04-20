import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrowIncDec',
})
export default class ArrowIncDecPipe implements PipeTransform {
  transform(value: boolean | undefined): string {
    if (value === undefined) return '';
    return value ? '↑' : '↓';
  }
}
