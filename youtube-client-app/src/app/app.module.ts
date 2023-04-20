import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './header/header/header.component';
import SearchResultsComponent from './search/search-results/search-results.component';
import LoginComponent from './header/login/login.component';
import SortSettingsComponent from './header/sort-settings/sort-settings.component';
import SearchItemComponent from './search/search-item/search-item.component';
import SearchAddItemComponent from './search/search-add-item/search-add-item.component';
import RegistrationComponent from './header/registration/registration.component';
import ShortNumberPipe from './pipes/short-number.pipe';
import CardColorPipe from './pipes/card-color.pipe';
import CardFilterPipe from './pipes/card-filter.pipe';
import ArrowIncDecPipe from './pipes/arrow-inc-dec.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    SearchResultsComponent,
    LoginComponent,
    SortSettingsComponent,
    SearchAddItemComponent,
    RegistrationComponent,
    ShortNumberPipe,
    CardColorPipe,
    CardFilterPipe,
    ArrowIncDecPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressBarModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
