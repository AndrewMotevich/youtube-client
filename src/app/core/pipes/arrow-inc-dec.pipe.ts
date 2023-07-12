import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrowIncDec',
})
export default class ArrowIncDecPipe implements PipeTransform {
  public transform(value: boolean | undefined): string {
    if (value === undefined) return '';
    return value ? '↑' : '↓';
  }
}
