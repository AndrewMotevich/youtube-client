import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export default class MyInterceptor implements HttpInterceptor {
  public intercept(
    httpRequest: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newParams = httpRequest.params.append(
      'key',
      environment.youtubeApiKey
    );
    return next.handle(
      httpRequest.clone({
        params: newParams,
      })
    );
  }
}
