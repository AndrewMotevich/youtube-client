import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardColor',
  standalone: true,
})
export default class CardColorPipe implements PipeTransform {
  public transform(value: string | undefined): string | null {
    if (value === undefined) return null;

    const millisecondsInHour = 3600000;

    const greenValue = 7 * 24 * millisecondsInHour;
    const blueValue = 31 * 24 * millisecondsInHour;
    const yellowValue = 6 * 31 * 24 * millisecondsInHour;

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
