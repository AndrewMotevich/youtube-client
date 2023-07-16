import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, map, combineLatest } from 'rxjs';
import { IYoutubeCard } from 'src/app/redux/state.model';
import { Store } from '@ngrx/store';
import selectYoutubeCards from 'src/app/redux/selectors/youtube-cards.selector';
import { getYoutubeCardsFromApi } from 'src/app/redux/actions/youtube-cards.action';
import selectCustomCards from 'src/app/redux/selectors/custom-cards.selector';
import FilteredResultServiceService from '../../../core/services/filtered-result-service.service';
import { ItemObj } from '../../models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchResultsComponent {
  public searchResultsObserver?: Observable<IYoutubeCard[]>;

  private youtubeCards$: Observable<IYoutubeCard[]>;

  private customYoutubeCards$: Observable<IYoutubeCard[]>;

  public filterObjectObserver = this.filterService.filterObjObserver;

  constructor(
    private filterService: FilteredResultServiceService,
    private store: Store
  ) {
    this.customYoutubeCards$ = this.store.select(selectCustomCards);
    this.youtubeCards$ = this.store.select(selectYoutubeCards);

    this.searchResultsObserver = combineLatest([
      this.youtubeCards$,
      this.customYoutubeCards$,
    ]).pipe(
      map(([youtubeCards, customCards]) => [...youtubeCards, ...customCards])
    );
    this.store.dispatch(getYoutubeCardsFromApi());
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
