import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { IFilterSearchType } from '../../../youtube/models/filter-search.model';

@Component({
  selector: 'app-sort-settings',
  templateUrl: './sort-settings.component.html',
  styleUrls: ['./sort-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SortSettingsComponent implements OnInit {
  @Output() public filterEmitter = new EventEmitter<IFilterSearchType>();

  public viewSort: boolean | undefined = undefined;

  public dateSort: boolean | undefined = undefined;

  public querySort: string | undefined;

  public ngOnInit() {
    this.filterEmitter.emit({
      viewOrder: this.viewSort,
      dateOrder: this.dateSort,
      queryString: this.querySort,
    });
  }

  public setViewSort() {
    this.dateSort = undefined;
    if (this.viewSort === undefined) {
      this.viewSort = true;
    } else {
      this.viewSort = !this.viewSort;
    }
    this.filterEmitter.emit({
      viewOrder: this.viewSort,
      dateOrder: this.dateSort,
      queryString: this.querySort,
    });
  }

  public setDateSort() {
    this.viewSort = undefined;
    if (this.dateSort === undefined) {
      this.dateSort = true;
    } else {
      this.dateSort = !this.dateSort;
    }
    this.filterEmitter.emit({
      viewOrder: this.viewSort,
      dateOrder: this.dateSort,
      queryString: this.querySort,
    });
  }

  public setQuery(event: Event) {
    event.preventDefault();
    this.querySort = (event.target as HTMLInputElement).value;
    this.filterEmitter.emit({
      viewOrder: this.viewSort,
      dateOrder: this.dateSort,
      queryString: this.querySort,
    });
  }
}
