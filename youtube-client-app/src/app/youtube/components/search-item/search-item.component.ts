import { Component, Input, OnInit } from '@angular/core';
import { ItemObj } from '../../models/search-response.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit {
  @Input() item?: ItemObj;

  id?: string;

  date?: string = '';

  title?: string = '';

  img?: string = '';

  viewed?: string = '';

  like?: string = '';

  dislike?: string = '';

  copy?: string = '';

  published?: string = '';

  searchItem?: ItemObj;

  parseDate?: number;

  ngOnInit(): void {
    this.searchItem = this.item;
    this.id = this.searchItem?.id;
    this.date = this.searchItem?.snippet.publishedAt;
    this.title = this.searchItem?.snippet.title;
    this.img = this.searchItem?.snippet.thumbnails['medium'].url;
    this.viewed = this.searchItem?.statistics.viewCount;
    this.like = this.searchItem?.statistics.likeCount;
    this.dislike = this.searchItem?.statistics.dislikeCount;
    this.copy = this.searchItem?.statistics.commentCount;
    this.published = this.searchItem?.snippet.publishedAt;
    this.parseDate =
      this.date !== undefined ? Date.parse(this.date) : undefined;
  }
}
