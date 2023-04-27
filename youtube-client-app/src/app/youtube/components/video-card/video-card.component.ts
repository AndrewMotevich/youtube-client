import { Component, Input, OnInit } from '@angular/core';
import { ItemObj } from '../../models/search-response.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export default class VideoCardComponent implements OnInit {
  @Input() item?: ItemObj;

  options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  enFormatDate: string | undefined;

  searchItem: ItemObj | undefined;

  date: string | undefined = '';

  description: string | undefined = '';

  title: string | undefined = '';

  img: string | undefined = '';

  viewed: string | undefined = '';

  like: string | undefined = '';

  dislike: string | undefined = '';

  copy: string | undefined = '';

  published: string | undefined = '';

  parseDate: number | undefined;

  ngOnInit(): void {
    this.searchItem = this.item;
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
  }
}
