import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import DetailedPageComponent from './detailed-page.component';

const routes: Routes = [
  {
    path: '',
    component: DetailedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class DetailedRoutingModule {}
