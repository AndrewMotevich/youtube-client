import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import mockResponse from './mock-results/results.json';
import YoutubeApiService from '../../services/youtube-api.service';
import FilteredResultServiceService from '../../../core/services/filtered-result-service.service';
import { ItemObj } from '../../models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchResultsComponent {
  public searchResultsObserver = new BehaviorSubject<ItemObj[]>(
    mockResponse.items
  );

  public filterObjectObserver = this.filterService.filterObjObserver;

  constructor(
    private youtubeApi: YoutubeApiService,
    private filterService: FilteredResultServiceService
  ) {
    this.youtubeApi.searchResponse.subscribe((res) =>
      this.searchResultsObserver.next(res)
    );
    this.filterObjectObserver.subscribe((filterObj) => {
      this.youtubeApi.searchResponse.subscribe((res) => {
        if (filterObj.viewOrder !== null) {
          this.searchResultsObserver.next(
            this.sortByViews(filterObj.viewOrder, res)
          );
        } else if (filterObj.dateOrder !== null) {
          this.searchResultsObserver.next(
            this.sortByDate(filterObj.dateOrder, res)
          );
        }
      });
    });
  }

  private sortByViews(order: boolean, searchResults: ItemObj[]): ItemObj[] {
    if (order) {
      return searchResults.sort(
        (a, b) =>
          Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
      );
    }
    return searchResults.sort(
      (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
    );
  }

  private sortByDate(order: boolean, searchResults: ItemObj[]) {
    if (order) {
      return searchResults.sort(
        (a, b) =>
          Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)
      );
    }
    return searchResults.sort(
      (a, b) =>
        Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)
    );
  }
}
