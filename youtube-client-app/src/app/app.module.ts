import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './header/header/header.component';
import SearchResultsComponent from './search/search-results/search-results.component';
import LoginComponent from './header/login/login.component';
import SortSettingsComponent from './header/sort-settings/sort-settings.component';
import SearchAddItemComponent from './search/search-add-item/search-add-item.component';
import RegistrationComponent from './header/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    LoginComponent,
    SortSettingsComponent,
    SearchAddItemComponent,
    RegistrationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
