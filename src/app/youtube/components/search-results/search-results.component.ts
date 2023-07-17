import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Observable, map, combineLatest } from 'rxjs';
import { IYoutubeCard } from 'src/app/redux/state.model';
import { Store } from '@ngrx/store';
import selectYoutubeCards from 'src/app/redux/selectors/youtube-cards.selector';
import { getYoutubeCardsFromApi } from 'src/app/redux/actions/youtube-cards.action';
import selectCustomCards from 'src/app/redux/selectors/custom-cards.selector';
import { UntilDestroy } from '@ngneat/until-destroy';
import FilteredResultServiceService from '../../../core/services/filtered-result-service.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchResultsComponent {
  public searchResults: IYoutubeCard[] = [];

  private youtubeCards$: Observable<IYoutubeCard[]>;

  private customYoutubeCards$: Observable<IYoutubeCard[]>;

  public filterObjectObserver = this.filterService.filterObjObserver;

  constructor(
    private filterService: FilteredResultServiceService,
    private store: Store,
    private changeDetection: ChangeDetectorRef
  ) {
    this.customYoutubeCards$ = this.store.select(selectCustomCards);
    this.youtubeCards$ = this.store.select(selectYoutubeCards);

    combineLatest([this.youtubeCards$, this.customYoutubeCards$])
      .pipe(
        map(([youtubeCards, customCards]) => [...youtubeCards, ...customCards]),
        map((x) => {
          this.searchResults = x;
        })
      )
      .subscribe(() => {
        this.changeDetection.markForCheck();
      });

    this.store.dispatch(getYoutubeCardsFromApi());

    this.filterObjectObserver.subscribe((filterObj) => {
      if (filterObj.viewOrder !== null) {
        this.sortByViews(filterObj.viewOrder, this.searchResults);
      } else if (filterObj.dateOrder !== null) {
        this.sortByDate(filterObj.dateOrder, this.searchResults);
      }
    });
  }

  private sortByViews(
    order: boolean,
    searchResults: IYoutubeCard[]
  ): IYoutubeCard[] {
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

  private sortByDate(order: boolean, searchResults: IYoutubeCard[]) {
    if (order) {
      return searchResults.sort(
        (a, b) => Date.parse(a.creationDate) - Date.parse(b.creationDate)
      );
    }
    return searchResults.sort(
      (a, b) => Date.parse(b.creationDate) - Date.parse(a.creationDate)
    );
  }
}
