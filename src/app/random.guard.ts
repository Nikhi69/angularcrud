import { JwtauthenticateService } from './service/jwtauthenticate.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class RandomGuard implements CanActivate,CanLoad{
      constructor(private jwtAuthservice:JwtauthenticateService,private router:Router){

      }
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      return this.canLoad();
    }
 canLoad() {
       if(!this.jwtAuthservice.isLoggedIn()){
           this.router.navigate(['/login']);
       }
       return this.jwtAuthservice.isLoggedIn();
    }
  }