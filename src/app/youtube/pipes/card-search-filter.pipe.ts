import { Pipe, PipeTransform } from '@angular/core';
import { IYoutubeCard } from 'src/app/redux/state.model';
import { IFilterSearchType } from '../models/filter-search.model';

@Pipe({
  name: 'cardFilter',
})
export default class CardFilterPipe implements PipeTransform {
  public transform(
    value: IYoutubeCard[],
    filterObj: IFilterSearchType | null
  ): IYoutubeCard[] {
    if (filterObj?.queryString) {
      const filteredArray = value.filter((elem) =>
        elem.title
          .toLowerCase()
          .includes((filterObj.queryString as string).toLowerCase())
      );
      return filteredArray;
    }
    return value;
  }
}
