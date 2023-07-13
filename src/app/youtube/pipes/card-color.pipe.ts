import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardColor',
  standalone: true,
})
export default class CardColorPipe implements PipeTransform {
  public transform(value: string | undefined): string | null {
    if (value === undefined) return null;
    const greenValue = 7 * 24 * 3600000;
    const blueValue = 31 * 24 * 3600000;
    const yellowValue = 6 * 31 * 24 * 3600000;
    const currentDate = Date.parse(Date());
    const parseDate = Number(currentDate) - Date.parse(value);
    if (parseDate < greenValue) {
      return 'footer-color_green';
    }
    if (parseDate >= greenValue && parseDate < blueValue) {
      return 'footer-color_blue';
    }
    if (parseDate >= blueValue && parseDate < yellowValue) {
      return 'footer-color_yellow';
    }
    if (parseDate > yellowValue) {
      return 'footer-color_red';
    }
    return null;
  }
}
