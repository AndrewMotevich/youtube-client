import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { IYoutubeCard } from 'src/app/redux/state.model';
import { Store } from '@ngrx/store';
import { getYoutubeCards } from 'src/app/redux/actions/youtube-cards.action';
import { UntilDestroy } from '@ngneat/until-destroy';
import selectAllCards from 'src/app/redux/selectors/all-cards.selector';
import FilteredResultServiceService from '../../../core/services/filtered-result-service.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchResultsComponent implements OnInit {
  public searchResults: IYoutubeCard[] = [];

  private allCards$: Observable<IYoutubeCard[]>;

  public filterObjectObserver = this.filterService.filterObjObserver;

  constructor(
    private filterService: FilteredResultServiceService,
    private store: Store,
    private changeDetection: ChangeDetectorRef
  ) {
    this.store.dispatch(getYoutubeCards({}));
    this.allCards$ = this.store.select(selectAllCards);
  }

  public ngOnInit() {
    this.allCards$.subscribe((res) => {
      this.searchResults = res;
      this.changeDetection.markForCheck();
    });

    this.filterObjectObserver.subscribe((filterObj) => {
      if (filterObj.viewOrder !== null) {
        this.sortByViews(filterObj.viewOrder, this.searchResults);
      } else if (filterObj.dateOrder !== null) {
        this.sortByDate(filterObj.dateOrder, this.searchResults);
      }
    });
  }

  private sortByViews(order: boolean, searchResults: IYoutubeCard[]) {
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
