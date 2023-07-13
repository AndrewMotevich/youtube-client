import { Injectable } from '@angular/core';
import { IFilterSearchType } from '../../youtube/models/filter-search.model';

@Injectable({
  providedIn: 'root',
})
export default class FilteredResultServiceService {
  private filterObj: IFilterSearchType = {
    viewOrder: undefined,
    dateOrder: undefined,
    queryString: undefined,
  };

  public setFilterObj(value: IFilterSearchType) {
    this.filterObj = value;
  }

  public getFilterObj() {
    return this.filterObj;
  }
}
