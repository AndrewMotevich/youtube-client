import { Injectable } from '@angular/core';
import { IFilterSearchType } from '../models/filter-search.model';

@Injectable({
  providedIn: 'root',
})
export default class FilteredResultServiceService {
  public filterObj: IFilterSearchType = {
    viewOrder: undefined,
    dateOrder: undefined,
    queryString: undefined,
  };

  public setFilterObj(value: IFilterSearchType) {
    this.filterObj = value;
  }
}
