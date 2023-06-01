import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import NotFoundPageComponent from './youtube/pages/not-found-page/not-found-page.component';
import LoginPageComponent from './auth/pages/login-page/login-page.component';
import IsLoggedInGuard from './auth/guards/is-logged-in.guard';
import AdminPageComponent from './auth/pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: AdminPageComponent },
  {
    path: 'main',
    loadChildren: () =>
      import('./youtube/pages/main-page/main-page.module').then(
        (m) => m.default
      ),
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'detailed/:id',
    loadChildren: () =>
      import('./youtube/pages/detailed-page/detailed-page.module').then(
        (m) => m.default
      ),
    canActivate: [IsLoggedInGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, RouterLink],
})
export default class AppRoutingModule {}
