import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import MainPageModule from './youtube/pages/main-page/main-page.module';
import { NotFoundPageComponent } from './youtube/pages/not-found-page/not-found-page.component';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import CoreModule from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    LoginFormComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainPageModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
