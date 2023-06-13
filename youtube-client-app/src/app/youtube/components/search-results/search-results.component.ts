import { Component, Input, OnChanges } from '@angular/core';
import { ItemObj, SearchResponse } from '../../models/search-response.model';
import response from './mock-results/results.json';
import { FilterSearchType } from '../../models/filter-search.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnChanges {
  @Input() filterObject: FilterSearchType = {
    viewOrder: undefined,
    dateOrder: undefined,
    queryString: undefined,
  };

  mockResponse: SearchResponse = response;

  searchResults: ItemObj[] = [];

  ngOnChanges(): void {
    this.filterResponse();
  }

  filterResponse() {
    const { viewOrder, dateOrder } = this.filterObject;
    if (viewOrder !== undefined) this.sortByViews(viewOrder);
    if (dateOrder !== undefined) this.sortByDate(dateOrder);
    else {
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
