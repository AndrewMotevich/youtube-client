import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IYoutubeCard } from 'src/app/redux/state.model';
import { Observable } from 'rxjs';
import selectYoutubeCards from 'src/app/redux/selectors/youtube-cards.selector';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export default class VideoCardComponent implements OnInit {
  private options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  public youtubeCards$?: Observable<IYoutubeCard[]>;

  public videoItem?: IYoutubeCard;

  public enFormatDate?: string;

  public img?: string;

  constructor(private route: ActivatedRoute, private store: Store) {}

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.youtubeCards$ = this.store.select(selectYoutubeCards);
    this.youtubeCards$.subscribe((res) => {
      this.videoItem = res.find((video) => video.videoUrl === id);
      this.img = this.videoItem?.imageUrl;
      this.enFormatDate = new Intl.DateTimeFormat('en-US', this.options).format(
        Date.parse(this.videoItem?.creationDate || '')
      );
    });
  }
}
