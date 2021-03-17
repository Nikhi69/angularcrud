import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, mapTo, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Tokens } from '../tokens';


// export const TOKEN= 'token'
export const AUTHENTICATED_USER=`username`
@Injectable({
  providedIn: 'root'
})
export class JwtauthenticateService {
  private readonly JWT_TOKEN ='JWT_TOKEN';
  private readonly REFRESH_TOKEN='REFRESH_TOKEN';

  private loggedUser!:any;
user!:User
  constructor(private http:HttpClient) { }

  // executeJWTAuthenticationService(user:{username:string,password:string})
  executeJWTAuthenticationService(user:{username:string,password:string}):Observable<boolean>{
return this.http.post<any>(

  `http://localhost:8080/authenticate`,user).pipe(
    tap(
      tokens=> this.doLoginUser(user.username,tokens)),
      
        mapTo(true),
      
        catchError(error=>{
          alert(error.error);
          return of(false);
        })
        // sessionStorage.setItem(this.AUTHENTICATED_USER,username);
   
        
        // sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
        // sessionStorage.setItem('access_token',data.access_token);
        // return data;
      
    )
  ;
  }
  
logout(){
  return this.http.post<any>(`http://localhost:8080/logout`,{
    'refreshToken':this.getRefreshToken()
  }).pipe(
    tap(()=>this.doLogoutUser()),
    mapTo(true),
    catchError(error =>{
      alert(error.error);
      return of(false);
    })
  );
}

refreshToken(){
  return this.http.post<any>(`http://localhost:8080/refresh`,{
    'refreshToken':this.getRefreshToken()
  }).pipe(
    tap((tokens:Tokens)=>{
      this.storeJwtToken(tokens.jwt);
    })
  );
}

  isLoggedIn(){
    return !this.getJwtToken();

  }

  getJwtToken(){
    return sessionStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username:string,tokens:Tokens){
    this.loggedUser=username;
    console.log(username);
    this.storeTokens(tokens);
    console.log(tokens);

  }

  private doLogoutUser(){
    this.loggedUser=null;
   this.removeTokens();
  }

  private storeJwtToken(jwt:string){
     sessionStorage.setItem(this.JWT_TOKEN,jwt);
  }
private getRefreshToken(){
  return sessionStorage.getItem(this.REFRESH_TOKEN);
}
  private storeTokens(tokens:Tokens){
    console.log(tokens.jwt)
    sessionStorage.setItem(this.JWT_TOKEN,tokens.jwt);
    sessionStorage.setItem(this.REFRESH_TOKEN,tokens.refreshToken);
    
  }

 removeTokens(){
    sessionStorage.removeItem(this.JWT_TOKEN);
    sessionStorage.removeItem(this.REFRESH_TOKEN);
  }

  // getAuthenticatedUser(){
  //   return sessionStorage.getItem(AUTHENTICATED_USER)
  // }

  // getAuthenticatedToken():any{
  //   if(this.getAuthenticatedUser())
  //     return sessionStorage.getItem(TOKEN)
  // }

  // isUserLoggedIn(){
  //   let user =sessionStorage.getItem(AUTHENTICATED_USER)
  //   return !(user===null)
  // }

  // logout(){
  //   sessionStorage.removeItem(AUTHENTICATED_USER)
  //   sessionStorage.removeItem(TOKEN)
  // }

}

export class AuthenticationBean{
  constructor(public message:string){

  }
}