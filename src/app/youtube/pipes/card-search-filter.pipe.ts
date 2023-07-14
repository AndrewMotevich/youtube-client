import { Pipe, PipeTransform } from '@angular/core';
import { ItemObj } from '../models/search-response.model';
import { IFilterSearchType } from '../models/filter-search.model';

@Pipe({
  name: 'cardFilter',
})
export default class CardFilterPipe implements PipeTransform {
  public transform(
    value: ItemObj[],
    filterObj: IFilterSearchType | null
  ): ItemObj[] {
    if (filterObj?.queryString) {
      const filteredArray = value.filter((elem) =>
        elem.snippet.title
          .toLowerCase()
          .includes((filterObj.queryString as string).toLowerCase())
      );
      return filteredArray;
    }
    return value;
  }
}
