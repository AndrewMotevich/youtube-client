import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterSearchType } from 'src/app/search/filter-search.model';

@Component({
  selector: 'app-sort-settings',
  templateUrl: './sort-settings.component.html',
  styleUrls: ['./sort-settings.component.scss'],
})
export default class SortSettingsComponent implements OnInit {
  @Output() filterEmitter = new EventEmitter<FilterSearchType>();

  viewSort: boolean | undefined = undefined;

  dateSort: boolean | undefined = undefined;

  querySort: string | undefined;

  ngOnInit() {
    this.filterEmitter.emit({
      viewOrder: this.viewSort,
      dateOrder: this.dateSort,
      queryString: this.querySort,
    });
  }

  setViewSort() {
    this.dateSort = undefined;
    if (this.viewSort === undefined) {
      this.viewSort = true;
    } else {
      this.viewSort = !this.viewSort;
    }
    this.filterEmitter.emit({
      viewOrder: this.viewSort,
      dateOrder: this.dateSort,
      queryString: this.querySort,
    });
  }

  setDateSort() {
    this.viewSort = undefined;
    if (this.dateSort === undefined) {
      this.dateSort = true;
    } else {
      this.dateSort = !this.dateSort;
    }
    this.filterEmitter.emit({
      viewOrder: this.viewSort,
      dateOrder: this.dateSort,
      queryString: this.querySort,
    });
  }

  setQuery(event: Event) {
    event.preventDefault();
    this.querySort = (event.target as HTMLInputElement).value;
    this.filterEmitter.emit({
      viewOrder: this.viewSort,
      dateOrder: this.dateSort,
      queryString: this.querySort,
    });
  }
}
