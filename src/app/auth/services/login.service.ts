import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  private isLogin = false;

  public getIsLogin(): boolean {
    return this.isLogin;
  }

  public setIsLogin(value: boolean) {
    this.isLogin = value;
    localStorage.setItem('login', `${value}`);
  }
}
