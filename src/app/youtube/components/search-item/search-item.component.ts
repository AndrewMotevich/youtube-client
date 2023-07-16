import { Component, Input, OnInit } from '@angular/core';
import { IYoutubeCard } from 'src/app/redux/state.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit {
  @Input() public item?: IYoutubeCard;

  public img?: string;

  public parseDate?: number;

  public ngOnInit(): void {
    this.img = this.item?.imageUrl || '';
    this.parseDate = this.item?.creationDate
      ? Date.parse(this.item?.creationDate)
      : undefined;
  }
}
