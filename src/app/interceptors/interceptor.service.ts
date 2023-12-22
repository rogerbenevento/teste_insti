import { Injectable } from '@angular/core';
import { 
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest }
from '@angular/common/http';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {
 intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

  const user = environment.apiUser;
  const pass = environment.apiPass;

  request = request.clone({
    setHeaders: {
      Authorization: `Basic ${btoa(`${user}:${pass}`)}`,
    }
  });

  console.log(request);
  return next.handle(request);
 }
}