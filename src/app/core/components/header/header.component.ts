import { Component, ChangeDetectionStrategy } from '@angular/core';
import LoginService from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent {
  public showSettings = false;

  constructor(private loginService: LoginService) {}

  public getIsLogin() {
    return this.loginService.getIsLoginObservable();
  }

  public settingsButtonHandler() {
    this.showSettings = !this.showSettings;
  }

  public logOut() {
    this.loginService.setIsLogin(false);
  }
}
