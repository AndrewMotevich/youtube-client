import { Component, ChangeDetectionStrategy } from '@angular/core';
import LoginService from 'src/app/auth/services/login.service';
import YoutubeApiService from 'src/app/youtube/services/youtube-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent {
  public showSettings = false;

  constructor(
    private loginService: LoginService,
    private youtubeApiService: YoutubeApiService
  ) {}

  public getIsLogin() {
    return this.loginService.getIsLoginObservable();
  }

  public settingsButtonHandler() {
    this.showSettings = !this.showSettings;
  }

  public logOut() {
    this.loginService.setIsLogin(false);
  }

  public getVideosFromApi(event: Event) {
    event.preventDefault();
    const searchQuery = (event.target as HTMLInputElement).value;
    // refactor: add dispatch
    this.youtubeApiService.getVideoByQueryString(searchQuery);
  }
}
