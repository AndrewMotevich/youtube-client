import { Component } from '@angular/core';
import response from '../../components/search-results/mock-results/results.json';
import { SearchResponse } from '../../models/search-response.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export default class DetailedPageComponent {
  objArray = response as unknown as SearchResponse;
}
