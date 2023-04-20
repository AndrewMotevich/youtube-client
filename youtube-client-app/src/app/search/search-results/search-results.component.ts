import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ItemObj, SearchResponse } from '../search-response.model';
import response from './mock-results/results.json';
import { FilterSearchType } from '../filter-search.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit, OnChanges {
  @Input() filterObject: FilterSearchType = {
    viewOrder: undefined,
    dateOrder: undefined,
    queryString: undefined,
  };

  mockResponse = response as unknown as SearchResponse;

  searchResults: ItemObj[] = [];

  ngOnInit(): void {
    this.filterResponse();
  }

  ngOnChanges(): void {
    this.filterResponse();
  }

  filterResponse() {
    const { viewOrder, dateOrder } = this.filterObject;
    if (viewOrder !== undefined) {
      if (viewOrder === true) this.sortByViews(true);
      if (viewOrder === false) this.sortByViews(false);
    }
    if (dateOrder !== undefined) {
      if (dateOrder === true) this.sortByDate(true);
      if (dateOrder === false) this.sortByDate(false);
    } else {
      this.mockResponse.items.forEach((elem) => {
        this.searchResults.push(elem);
      });
    }
  }

  sortByViews(order: boolean) {
    this.searchResults.length = 0;
    if (order === true) {
      this.mockResponse.items
        .sort((a, b) => {
          if (Number(a.statistics.viewCount) > Number(b.statistics.viewCount)) {
            return 1;
          }
          if (Number(a.statistics.viewCount) < Number(b.statistics.viewCount)) {
            return -1;
          }
          return 0;
        })
        .forEach((elem) => {
          this.searchResults.push(elem);
        });
    } else if (order === false) {
      this.mockResponse.items
        .sort((a, b) => {
          if (Number(a.statistics.viewCount) < Number(b.statistics.viewCount)) {
            return 1;
          }
          if (Number(a.statistics.viewCount) > Number(b.statistics.viewCount)) {
            return -1;
          }
          return 0;
        })
        .forEach((elem) => {
          this.searchResults.push(elem);
        });
    }
  }

  sortByDate(order: boolean) {
    this.searchResults.length = 0;
    if (order === true) {
      this.mockResponse.items
        .sort((a, b) => {
          if (
            Date.parse(a.snippet.publishedAt) >
            Date.parse(b.snippet.publishedAt)
          ) {
            return 1;
          }
          if (
            Date.parse(a.snippet.publishedAt) <
            Date.parse(b.snippet.publishedAt)
          ) {
            return -1;
          }
          return 0;
        })
        .forEach((elem) => {
          this.searchResults.push(elem);
        });
    } else if (order === false) {
      this.mockResponse.items
        .sort((a, b) => {
          if (
            Date.parse(a.snippet.publishedAt) <
            Date.parse(b.snippet.publishedAt)
          ) {
            return 1;
          }
          if (
            Date.parse(a.snippet.publishedAt) >
            Date.parse(b.snippet.publishedAt)
          ) {
            return -1;
          }
          return 0;
        })
        .forEach((elem) => {
          this.searchResults.push(elem);
        });
    }
  }
}
