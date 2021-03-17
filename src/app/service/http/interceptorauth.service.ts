import { BasicauthService } from './../basicauth.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { JwtauthenticateService } from '../jwtauthenticate.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorauthService implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private jwtAuthenticateService: BasicauthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{

    let basicAuthHeaderString = this.jwtAuthenticateService.getAuthenticatedToken();
    let username = this.jwtAuthenticateService.getAuthenticatedUser()

    if(basicAuthHeaderString && username) { 
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        }) 
    }
    return next.handle(request);
  }


}
