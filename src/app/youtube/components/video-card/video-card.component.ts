import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemObj } from '../../models/search-response.model';
import YoutubeApiService from '../../services/youtube-api.service';
import mockResponse from '../../../../mock/results.json';

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

  public videoItem!: ItemObj;

  public enFormatDate?: string;

  public img?: string;

  public parseDate?: number;

  constructor(
    private route: ActivatedRoute,
    private youtubeApi: YoutubeApiService
  ) {}

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.youtubeApi.searchResponse.subscribe((videoItems) => {
      this.videoItem =
        videoItems.find((elem) => elem.id === id) || mockResponse.items[0];
      this.img = this.videoItem?.snippet.thumbnails['maxres'].url;
      this.parseDate = Date.parse(this.videoItem?.snippet.publishedAt || '');
      this.enFormatDate = new Intl.DateTimeFormat('en-US', this.options).format(
        this.parseDate
      );
    });
  }
}
