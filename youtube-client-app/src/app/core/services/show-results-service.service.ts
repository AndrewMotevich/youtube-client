import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class ShowResultsServiceService {
  showResult = false;

  searchQuery = '';

  isShow(value: string) {
    if (value !== '') {
      this.searchQuery = value;
      this.showResult = true;
    } else this.showResult = false;
  }
}
