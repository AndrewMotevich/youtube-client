import { Component } from '@angular/core';
import ShowResultsServiceService from 'src/app/core/services/show-results-service.service';
import FilteredResultServiceService from './youtube/services/filtered-result-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  constructor(
    public showResultService: ShowResultsServiceService,
    public filteredResultService: FilteredResultServiceService
  ) {}
}
