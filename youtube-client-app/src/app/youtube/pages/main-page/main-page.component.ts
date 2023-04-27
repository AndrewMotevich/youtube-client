import { Component } from '@angular/core';
import ShowResultsServiceService from 'src/app/core/services/show-results-service.service';
import FilteredResultServiceService from '../../services/filtered-result-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent {
  constructor(
    public showResultService: ShowResultsServiceService,
    public filteredResultService: FilteredResultServiceService
  ) {}
}
