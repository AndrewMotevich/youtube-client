import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sort-settings',
  templateUrl: './sort-settings.component.html',
  styleUrls: ['./sort-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SortSettingsComponent {
  public viewSort: boolean | undefined = undefined;

  public dateSort: boolean | undefined = undefined;

  public querySort: string | undefined;

  public setViewSort() {
    this.dateSort = undefined;
    if (this.viewSort === undefined) {
      this.viewSort = true;
    } else {
      this.viewSort = !this.viewSort;
    }
  }

  public setDateSort() {
    this.viewSort = undefined;
    if (this.dateSort === undefined) {
      this.dateSort = true;
    } else {
      this.dateSort = !this.dateSort;
    }
  }

  public setQuery(event: Event) {
    event.preventDefault();
    this.querySort = (event.target as HTMLInputElement).value;
  }
}
