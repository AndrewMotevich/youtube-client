import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';
import LoginService from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export default class IsLoggedInGuard implements CanActivate {
  constructor(private loginService: LoginService) {}

  canActivate() {
    return this.loginService.isLogin;
  }
}
