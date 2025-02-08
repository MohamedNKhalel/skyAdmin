import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _ToastrService:ToastrService,private _AuthService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        if(error.error.message == "Invalid token."){
          this._AuthService.active.next(false);
          this._ToastrService.error(error.error.message);
          throw error
        }
        throw error
      })
    )
  }
}
