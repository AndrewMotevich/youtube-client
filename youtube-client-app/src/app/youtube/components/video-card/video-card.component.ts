import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemObj } from '../../models/search-response.model';
import MockApiService from '../../services/mock-api.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export default class VideoCardComponent implements OnInit {
  options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  enFormatDate?: string;

  searchItem?: ItemObj;

  date?: string = '';

  description?: string = '';

  title?: string = '';

  img?: string = '';

  viewed?: string = '';

  like?: string = '';

  dislike?: string = '';

  copy?: string = '';

  published?: string = '';

  parseDate?: number;

  constructor(private route: ActivatedRoute, private mockApi: MockApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.mockApi.getItemById(id as string).subscribe((obj) => {
      this.searchItem = obj;

      this.date = this.searchItem?.snippet.publishedAt;
      this.description = this.searchItem?.snippet.description;
      this.title = this.searchItem?.snippet.title;
      this.img = this.searchItem?.snippet.thumbnails['maxres'].url;
      this.viewed = this.searchItem?.statistics.viewCount;
      this.like = this.searchItem?.statistics.likeCount;
      this.dislike = this.searchItem?.statistics.dislikeCount;
      this.copy = this.searchItem?.statistics.commentCount;
      this.published = this.searchItem?.snippet.publishedAt;
      this.parseDate =
        this.date !== undefined ? Date.parse(this.date) : undefined;
      this.enFormatDate = new Intl.DateTimeFormat('en-US', this.options).format(
        this.parseDate
      );
    });
  }
}
