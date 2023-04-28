import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import LoginService from 'src/app/auth/services/login.service';
import { FilterSearchType } from 'src/app/youtube/models/filter-search.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  @Output() filterEvent = new EventEmitter<FilterSearchType>();

  constructor(public loginService: LoginService, private router: Router) {}

  isOn = false;

  addNewFilter(value: FilterSearchType) {
    this.filterEvent.emit(value);
  }

  addNewItem(
    event: Event,
    searchQuery = (event.target as HTMLInputElement).value
  ) {
    event.preventDefault();
    this.newItemEvent.emit(searchQuery);
  }

  showHide() {
    this.isOn = this.isOn ? (this.isOn = false) : (this.isOn = true);
  }

  logOut() {
    this.loginService.setIsLogin(false);
  }

  ngOnInit(): void {
    if (localStorage.getItem('login') === 'true') {
      this.loginService.setIsLogin(true);
      this.router.navigate(['/main']);
    }
  }
}
