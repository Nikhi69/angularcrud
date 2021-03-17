import { HttpInterceptorauthService } from './service/http/interceptorauth.service';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { JwtauthenticateService } from './service/jwtauthenticate.service';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent,
    AdminlistComponent,
    UpdatemovieComponent,
    CustomerlistComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, 
    useClass:HttpInterceptorauthService,
    multi:true
  }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
