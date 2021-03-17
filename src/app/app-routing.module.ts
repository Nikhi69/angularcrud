import { FavoriteComponent } from './favorite/favorite.component';
import { AuthGuard } from './auth.guard';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'adminlist', component:AdminlistComponent},
  {path:'favorites/:username',component:FavoriteComponent},
  {path:'customerlist', component:CustomerlistComponent},
  {path:'edit/:id', component:UpdatemovieComponent},

  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
