import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import LoginService from 'src/app/auth/services/login.service';
import { IFilterSearchType } from 'src/app/youtube/models/filter-search.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent implements OnInit {
  @Output() public newItemEvent = new EventEmitter<string>();

  @Output() public filterEvent = new EventEmitter<IFilterSearchType>();

  public showSettings = false;

  constructor(private loginService: LoginService, private router: Router) {}

  public ngOnInit(): void {
    if (localStorage.getItem('login') === 'true') {
      this.loginService.setIsLogin(true);
      this.router.navigate(['/main']);
    }
  }

  public getIsLogin() {
    return this.loginService.getIsLogin();
  }

  public addNewFilter(value: IFilterSearchType) {
    this.filterEvent.emit(value);
  }

  public addNewItem(
    event: Event,
    searchQuery = (event.target as HTMLInputElement).value
  ) {
    event.preventDefault();
    this.newItemEvent.emit(searchQuery);
  }

  public onSettingsButtonClick() {
    this.showSettings = !this.showSettings;
  }

  public logOut() {
    this.loginService.setIsLogin(false);
  }
}
