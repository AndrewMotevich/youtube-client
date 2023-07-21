import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IYoutubeCard, YoutubeState } from 'src/app/redux/state.model';
import { Observable, combineLatest, map } from 'rxjs';
import selectYoutubeCards from 'src/app/redux/selectors/youtube-cards.selector';
import selectCustomCards from 'src/app/redux/selectors/custom-cards.selector';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoCardComponent implements OnInit {
  private options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  public searchResultObserver!: Observable<IYoutubeCard[]>;

  public videoItem?: IYoutubeCard;

  public enFormatDate?: string;

  public imageUrl?: string;

  private youtubeCards$?: Observable<YoutubeState>;

  private customYoutubeCards$?: Observable<YoutubeState>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.customYoutubeCards$ = this.store.select(selectCustomCards);
    this.youtubeCards$ = this.store.select(selectYoutubeCards);
    this.searchResultObserver = combineLatest([
      this.youtubeCards$,
      this.customYoutubeCards$,
    ]).pipe(
      map(([youtubeCards, customCards]) => [
        ...youtubeCards.videos,
        ...customCards.videos,
      ])
    );
  }

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.searchResultObserver.subscribe((res) => {
      this.videoItem = res.find((video) => video.id === id);
      this.imageUrl = this.videoItem?.imageUrl;
      this.enFormatDate = new Intl.DateTimeFormat('en-US', this.options).format(
        Date.parse(this.videoItem?.creationDate || '')
      );
    });
  }
}
