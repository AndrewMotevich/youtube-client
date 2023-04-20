import { Component } from '@angular/core';
import { FilterSearchType } from './search/filter-search.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
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
