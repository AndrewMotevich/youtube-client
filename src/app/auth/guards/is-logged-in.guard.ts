import { inject } from '@angular/core';

import LoginService from '../services/login.service';

const IsLoggedInFunctionGuard = () => {
  const loginService = inject(LoginService);
  return loginService.getIsLogin;
};

export default IsLoggedInFunctionGuard;
