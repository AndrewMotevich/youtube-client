import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemObj } from '../../models/search-response.model';
import YoutubeApiService from '../../services/youtube-api.service';
import FilteredResultServiceService from '../../services/filtered-result-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  public searchResults: Subject<ItemObj[]> = this.youtubeApi.searchResponse;

  public filterObject = this.filterService.getFilterObj();

  constructor(
    private youtubeApi: YoutubeApiService,
    private filterService: FilteredResultServiceService
  ) {}

  // private filterResponse() {
  //   if (this.filterObject.viewOrder !== undefined) {
  //     this.searchResults = this.sortByViews(this.filterObject.viewOrder);
  //   }
  //   if (this.filterObject.dateOrder !== undefined) {
  //     this.searchResults = this.sortByDate(this.filterObject.dateOrder);
  //   }
  // }

  // private sortByViews(order: boolean) {
  //   if (order) {
  //     return this.searchResults.sort(
  //       (a, b) =>
  //         Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
  //     );
  //   }
  //   return this.searchResults.sort(
  //     (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
  //   );
  // }

  // private sortByDate(order: boolean) {
  //   if (order) {
  //     return this.searchResults.sort(
  //       (a, b) =>
  //         Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)
  //     );
  //   }
  //   return this.searchResults.sort(
  //     (a, b) =>
  //       Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)
  //   );
  // }
}
