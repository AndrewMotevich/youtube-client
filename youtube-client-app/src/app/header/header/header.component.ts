import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  isOn = false;

  addNewItem(event: Event) {
    event.preventDefault();
    this.newItemEvent.emit((event.target as HTMLInputElement).value);
  }

  showHide() {
    this.isOn = this.isOn ? (this.isOn = false) : (this.isOn = true);
  }
}
