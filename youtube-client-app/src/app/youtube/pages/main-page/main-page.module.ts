import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import SearchResultsComponent from '../../components/search-results/search-results.component';
import SearchItemComponent from '../../components/search-item/search-item.component';
import MainPageComponent from './main-page.component';

import ShortNumberPipe from '../../pipes/short-number.pipe';
import CardColorPipe from '../../pipes/card-color.pipe';
import CardFilterPipe from '../../pipes/card-filter.pipe';
import MainRoutingModule from './main-routing.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    CardColorPipe,
    CardFilterPipe,
    MainPageComponent,
    ShortNumberPipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MainRoutingModule,
  ],
  exports: [ShortNumberPipe, CardColorPipe],
})
export default class MainPageModule {}
