import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MainPageComponent from './youtube/pages/main-page/main-page.component';

const routes: Routes = [{ path: '', component: MainPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
