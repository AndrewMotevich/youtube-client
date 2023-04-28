import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  isLogin = false;

  setIsLogin(value: boolean) {
    this.isLogin = value;
  }
}
