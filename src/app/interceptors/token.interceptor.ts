import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token:any = {
      Authorization:localStorage.getItem("token")
    }

    if(localStorage.getItem("token") != null){
      request = request.clone({
        setHeaders:token
      })
    }
    return next.handle(request);
  }
}
