import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IYoutubeCard } from 'src/app/redux/state.model';
import { Observable } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import selectAllCards from 'src/app/redux/selectors/all-cards.selector';

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

  public videoItem?: IYoutubeCard;

  public enFormatDate?: string;

  public imageUrl?: string;

  private allCards$?: Observable<IYoutubeCard[]>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.allCards$ = this.store.select(selectAllCards);
  }

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.allCards$?.subscribe((res) => {
      this.videoItem = res.find((video) => video.id === id);
      this.imageUrl = this.videoItem?.imageUrl;
      this.enFormatDate = new Intl.DateTimeFormat('en-US', this.options).format(
        Date.parse(this.videoItem?.creationDate || '')
      );
    });
  }
}
