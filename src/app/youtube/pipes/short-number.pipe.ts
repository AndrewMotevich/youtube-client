import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber',
  standalone: true,
})
export default class ShortNumberPipe implements PipeTransform {
  public transform(value: string | undefined): string | null {
    const number = Number(value);

    if (Number.isNaN(number)) return null;
    if (number === null) return null;
    if (number === undefined) return null;
    if (number === 0) return null;

    const rounder = 10 ** 1;
    const isNegative = number < 0;
    let abs = Math.abs(number);
    let key = '';

    const powers = [
      { key: 'Q', value: 10 ** 15 },
      { key: 'T', value: 10 ** 12 },
      { key: 'B', value: 10 ** 9 },
      { key: 'M', value: 10 ** 6 },
      { key: 'K', value: 1000 },
    ];

    for (let i = 0; i < powers.length; i += 1) {
      let reduced = abs / powers[i].value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        abs = reduced;
        key = powers[i].key;
        break;
      }
    }
    return (isNegative ? '-' : '') + abs + key;
  }
}
