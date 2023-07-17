import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  private isLogin = new BehaviorSubject(false);

  public getIsLoginObservable(): BehaviorSubject<boolean> {
    return this.isLogin;
  }

  public setIsLogin(value: boolean) {
    this.isLogin.next(value);
    localStorage.setItem('login', `${value}`);
  }
}
