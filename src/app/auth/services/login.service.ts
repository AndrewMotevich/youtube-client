import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  private isLogin = false;

  getIsLogin(): boolean {
    return this.isLogin;
  }

  setIsLogin(value: boolean) {
    this.isLogin = value;
    localStorage.setItem('login', `${value}`);
  }
}
