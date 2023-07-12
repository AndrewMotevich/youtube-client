import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import SearchResultsComponent from '../../components/search-results/search-results.component';
import SearchItemComponent from '../../components/search-item/search-item.component';
import MainPageComponent from './main-page.component';

import CardFilterPipe from '../../pipes/card-filter.pipe';
import MainRoutingModule from './main-routing.module';
import CardColorPipe from '../../pipes/card-color.pipe';
import ShortNumberPipe from '../../pipes/short-number.pipe';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    CardFilterPipe,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MainRoutingModule,
    CardColorPipe,
    ShortNumberPipe,
  ],
  exports: [],
})
export default class MainPageModule {}
