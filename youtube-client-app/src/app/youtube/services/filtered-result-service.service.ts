import { Injectable } from '@angular/core';
import { FilterSearchType } from '../models/filter-search.model';

@Injectable({
  providedIn: 'root',
})
export default class FilteredResultServiceService {
  filterObj: FilterSearchType = {
    viewOrder: undefined,
    dateOrder: undefined,
    queryString: undefined,
  };

  setFilterObj(value: FilterSearchType) {
    this.filterObj = value;
  }
}
