import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import LoginService from 'src/app/auth/services/login.service';
import { getYoutubeCards } from 'src/app/redux/actions/youtube-cards.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent {
  public showSettings = false;

  public searchForm = new FormGroup({
    search: new FormControl(''),
  });

  constructor(private loginService: LoginService, private store: Store) {}

  public getIsLogin() {
    return this.loginService.getIsLoginObservable();
  }

  public settingsButtonHandler() {
    this.showSettings = !this.showSettings;
  }

  public logOut() {
    this.loginService.setIsLogin(false);
  }

  public getVideosFromApi() {
    const searchQuery = this.searchForm.controls.search.value;
    this.store.dispatch(getYoutubeCards({ queryString: searchQuery || '' }));
  }
}
