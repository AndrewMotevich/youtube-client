import { Component, Input, OnInit } from '@angular/core';
import SearchItemModel from '../../models/search-item.model';
import { ItemObj } from '../../models/search-response.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit, SearchItemModel {
  @Input() item?: ItemObj;

  date: string | undefined = '';

  title: string | undefined = '';

  img: string | undefined = '';

  viewed: string | undefined = '';

  like: string | undefined = '';

  dislike: string | undefined = '';

  copy: string | undefined = '';

  published: string | undefined = '';

  searchItem: ItemObj | undefined;

  parseDate: number | undefined;

  ngOnInit(): void {
    this.searchItem = this.item;
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
