import { Component } from '@angular/core';
import { FilterSearchType } from '../../models/filter-search.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent {
  showResult = false;

  filterObj: FilterSearchType = {
    viewOrder: undefined,
    dateOrder: undefined,
    queryString: undefined,
  };

  setFilterObj(event: FilterSearchType) {
    this.filterObj = event;
  }

  searchQuery = '';

  isShow(value: string) {
    if (value !== '') {
      this.searchQuery = value;
      this.showResult = true;
    } else this.showResult = false;
  }
}
