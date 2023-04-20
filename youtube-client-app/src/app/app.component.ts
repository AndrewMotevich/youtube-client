import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  showResult = false;

  searchQuery = '';

  isShow(value: string) {
    if (value !== '') {
      this.searchQuery = value;
      this.showResult = true;
    }
  }
}
