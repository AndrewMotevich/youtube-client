import { Component, Input, OnChanges } from '@angular/core';
import { ItemObj, SearchResponse } from '../../models/search-response.model';
import response from './mock-results/results.json';
import { IFilterSearchType } from '../../models/filter-search.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnChanges {
  @Input() public filterObject!: IFilterSearchType;

  public searchResults: ItemObj[] = [];

  private mockResponse: SearchResponse = response;

  public ngOnChanges(): void {
    this.filterResponse();
  }

  private filterResponse() {
    if (this.filterObject.viewOrder !== undefined) {
      this.searchResults = this.sortByViews(this.filterObject.viewOrder);
    }
    if (this.filterObject.dateOrder !== undefined) {
      this.searchResults = this.sortByDate(this.filterObject.dateOrder);
    } else this.searchResults = this.mockResponse.items;
  }

  private sortByViews(order: boolean) {
    if (order) {
      return this.mockResponse.items.sort(
        (a, b) =>
          Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
      );
    }
    return this.mockResponse.items.sort(
      (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
    );
  }

  private sortByDate(order: boolean) {
    if (order) {
      return this.mockResponse.items.sort(
        (a, b) =>
          Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)
      );
    }
    return this.mockResponse.items.sort(
      (a, b) =>
        Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)
    );
  }
}
