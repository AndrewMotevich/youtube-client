import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import MainPageComponent from './youtube/pages/main-page/main-page.component';
import NotFoundPageComponent from './youtube/pages/not-found-page/not-found-page.component';
import LoginPageComponent from './auth/pages/login-page/login-page.component';
import DetailedPageComponent from './youtube/pages/detailed-page/detailed-page.component';
import IsLoggedInGuard from './auth/guards/is-logged-in.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'main',
    component: MainPageComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'detailed/:id',
    component: DetailedPageComponent,
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
