import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import FilteredResultServiceService from '../../services/filtered-result-service.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-sort-settings',
  templateUrl: './sort-settings.component.html',
  styleUrls: ['./sort-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SortSettingsComponent {
  public viewSort = this.sortService.getFilterObj().viewOrder;

  public dateSort = this.sortService.getFilterObj().dateOrder;

  constructor(private sortService: FilteredResultServiceService) {}

  public setViewSort() {
    if (this.viewSort === null) {
      this.viewSort = true;
    }
    this.viewSort = !this.viewSort;
    this.sortService.setFilterObj({
      ...this.sortService.getFilterObj(),
      dateOrder: null,
      viewOrder: this.viewSort,
    });
  }

  public setDateSort() {
    if (this.dateSort === null) {
      this.dateSort = true;
    }
    this.dateSort = !this.dateSort;
    this.sortService.setFilterObj({
      ...this.sortService.getFilterObj(),
      viewOrder: null,
      dateOrder: this.dateSort,
    });
  }

  public setQuery(event: Event) {
    event.preventDefault();
    const querySort = (event.target as HTMLInputElement).value;
    this.sortService.setFilterObj({
      ...this.sortService.getFilterObj(),
      queryString: querySort,
    });
  }
}
