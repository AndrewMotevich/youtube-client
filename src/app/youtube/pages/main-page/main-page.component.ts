import { Component } from '@angular/core';
import FilteredResultServiceService from '../../services/filtered-result-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent {
  constructor(private filteredResultService: FilteredResultServiceService) {}

  public getFilterObj() {
    return this.filteredResultService.getFilterObj();
  }
}
