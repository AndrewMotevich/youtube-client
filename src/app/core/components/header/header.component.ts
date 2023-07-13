import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import LoginService from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent implements OnInit {
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

  public settingsButtonHandler() {
    this.showSettings = !this.showSettings;
  }

  public logOut() {
    this.loginService.setIsLogin(false);
  }
}
