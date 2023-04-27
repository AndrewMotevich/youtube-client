import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import HeaderComponent from 'src/app/core/components/header/header.component';
import SortSettingsComponent from 'src/app/core/components/sort-settings/sort-settings.component';
import ArrowIncDecPipe from 'src/app/core/pipes/arrow-inc-dec.pipe';
import SearchResultsComponent from '../../components/search-results/search-results.component';
import SearchItemComponent from '../../components/search-item/search-item.component';
import MainPageComponent from './main-page.component';

import ShortNumberPipe from '../../pipes/short-number.pipe';
import CardColorPipe from '../../pipes/card-color.pipe';
import CardFilterPipe from '../../pipes/card-filter.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchResultsComponent,
    SortSettingsComponent,
    SearchItemComponent,
    ShortNumberPipe,
    CardColorPipe,
    CardFilterPipe,
    ArrowIncDecPipe,
    MainPageComponent,
  ],
  imports: [CommonModule, MatCardModule, MatProgressBarModule],
})
export default class MainPageModule {}
