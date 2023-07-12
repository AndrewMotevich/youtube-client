import { Component, Input, OnInit } from '@angular/core';
import { ItemObj } from '../../models/search-response.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit {
  @Input() public item?: ItemObj;

  public img?: string;

  public parseDate?: number;

  public ngOnInit(): void {
    this.img = this.item?.snippet?.thumbnails['medium'].url || '';
    this.parseDate = this.item?.snippet.publishedAt
      ? Date.parse(this.item?.snippet.publishedAt)
      : undefined;
  }
}
