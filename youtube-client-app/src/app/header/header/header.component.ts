import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  isOn = false;

  showHide() {
    this.isOn = this.isOn ? (this.isOn = false) : (this.isOn = true);
  }
}
