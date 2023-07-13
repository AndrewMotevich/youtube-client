import { inject } from '@angular/core';
import LoginService from '../services/login.service';

const IsLoggedInFunctionGuard = () => {
  const loginService = inject(LoginService);

  if (localStorage.getItem('login') === 'true') {
    loginService.setIsLogin(true);
    return true;
  }
  return false;
};

export default IsLoggedInFunctionGuard;
