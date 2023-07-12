import { Component } from '@angular/core';
import FilteredResultServiceService from './youtube/services/filtered-result-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  constructor(public filteredResultService: FilteredResultServiceService) {}
}
