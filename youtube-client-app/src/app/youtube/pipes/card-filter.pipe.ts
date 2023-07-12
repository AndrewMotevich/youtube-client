import { Pipe, PipeTransform } from '@angular/core';
import { ItemObj } from '../models/search-response.model';

@Pipe({
  name: 'cardFilter',
})
export default class CardFilterPipe implements PipeTransform {
  public transform(value: ItemObj[], queryString = ''): ItemObj[] {
    if (queryString) {
      const filteredArray = value.filter((elem) =>
        elem.snippet.title.includes(queryString)
      );
      return filteredArray;
    }
    return value;
  }
}
