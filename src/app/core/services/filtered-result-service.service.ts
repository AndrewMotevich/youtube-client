import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFilterSearchType } from '../../youtube/models/filter-search.model';

@Injectable({
  providedIn: 'root',
})
export default class FilteredResultServiceService {
  private filterObj: IFilterSearchType = {
    viewOrder: null,
    dateOrder: null,
    queryString: null,
  };

  public filterObjObserver = new BehaviorSubject<IFilterSearchType>(
    this.filterObj
  );

  public setFilterObj(value: IFilterSearchType) {
    this.filterObj = value;
    this.filterObjObserver.next(value);
  }

  public getFilterObj() {
    return this.filterObj;
  }
}
