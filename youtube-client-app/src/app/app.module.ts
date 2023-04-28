import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import NotFoundPageComponent from './youtube/pages/not-found-page/not-found-page.component';
import LoginPageComponent from './auth/pages/login-page/login-page.component';
import CoreModule from './core/core.module';
import LoginPageModule from './auth/pages/login-page/login-page.module';
import DetailedPageModule from './youtube/pages/detailed-page/detailed-page.module';
import DetailedPageComponent from './youtube/pages/detailed-page/detailed-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    DetailedPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    LoginPageModule,
    DetailedPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
