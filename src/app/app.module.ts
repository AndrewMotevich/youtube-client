import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import NotFoundPageComponent from './youtube/pages/not-found-page/not-found-page.component';
import LoginPageComponent from './auth/pages/login-page/login-page.component';
import CoreModule from './core/core.module';
import LoginPageModule from './auth/pages/login-page/login-page.module';
import AdminPageModule from './auth/pages/admin-page/admin-page.module';
import MyInterceptor from './youtube/services/interceptors.service';

import { featureReducer } from './redux/reducers/counter.reducer';
import CounterComponent from './youtube/components/counter-component/counter-component.component';
import CounterEffects from './redux/effects/counter.effect';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    LoginPageModule,
    AdminPageModule,
    HttpClientModule,
    StoreModule.forRoot({ counter: featureReducer }),
    EffectsModule.forRoot(CounterEffects),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
