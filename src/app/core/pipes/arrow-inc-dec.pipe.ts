import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrowIncDec',
})
export default class ArrowIncDecPipe implements PipeTransform {
  public transform(value: boolean | null): string {
    if (value === null) return '';
    return value ? '↑' : '↓';
  }
}
