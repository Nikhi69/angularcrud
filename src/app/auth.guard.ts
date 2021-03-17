import { JwtauthenticateService } from './service/jwtauthenticate.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private jwtAuthService:JwtauthenticateService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if(this.jwtAuthService.isLoggedIn()==true){
        return true;
      }
    return !this.jwtAuthService.isLoggedIn();
  }
  
}
