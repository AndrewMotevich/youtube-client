import { Component } from '@angular/core';
import { Router } from '@angular/router';
import LoginService from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export default class LoginFormComponent {
  constructor(public loginService: LoginService, private router: Router) {}

  changeLogin() {
    this.loginService.setIsLogin(true);
    this.router.navigate(['/main']);
  }

  hide = true;
}
