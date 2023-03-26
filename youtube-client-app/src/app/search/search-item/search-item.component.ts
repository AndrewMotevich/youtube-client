import { Component, Input, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SearchItemModel from '../search-item.model';
import { ItemObj } from '../search-response.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit, SearchItemModel {
  @Input() item?: ItemObj;

  title: string | undefined = '';

  img: string | undefined = '';

  viewed: string | undefined = '';

  like: string | undefined = '';

  dislike: string | undefined = '';

  copy: string | undefined = '';

  searchItem: ItemObj | undefined;

  ngOnInit(): void {
    this.searchItem = this.item;
    this.title = this.searchItem?.snippet.title;
    this.img = this.searchItem?.snippet.thumbnails['medium'].url;
    this.viewed = this.searchItem?.statistics.viewCount;
    this.like = this.searchItem?.statistics.likeCount;
    this.dislike = this.searchItem?.statistics.dislikeCount;
    this.copy = this.searchItem?.statistics.commentCount;
  }
}
