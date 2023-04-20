import { Pipe, PipeTransform } from '@angular/core';
import { ItemObj } from '../search/search-response.model';

@Pipe({
  name: 'cardFilter',
})
export default class CardFilterPipe implements PipeTransform {
  transform(value: ItemObj[], queryString = ''): ItemObj[] {
    if (queryString) {
      const filteredArray = value.filter((elem) =>
        elem.snippet.title.includes(queryString)
      );
      return filteredArray;
    }
    return value;
  }
}
