import { BasicauthService } from './../service/basicauth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtauthenticateService } from '../service/jwtauthenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username=''
  password=''
  errorMessage ='Invalid Credentials'
  invalidLogin =false

  constructor(private router:Router, private jwtAuthenticationService: BasicauthService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    // this.loginForm =this.formBuilder.group({
    //   username:[''],
    //   password:['']
    // });
  }

// get f(){
//   return this.loginForm.controls;
// }


// signIn(credentials) {
//   this.authService.login(credentials)
//     .subscribe(result => { 
//       if (result)
//         this.router.navigate(['/']);
//       else  
//         this.invalidLogin = true; 
//     });
// }
handleJWTLogin(){
  // console.log(this.username);
  this.jwtAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
  .subscribe(
    data => {
  
     if(data)
        this.router.navigate(['/adminlist'])
        this.invalidLogin =false
    },
    error =>{
      console.log(error)
      this.invalidLogin =true
    }
  )
  
}

}
