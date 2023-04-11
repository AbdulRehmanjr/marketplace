import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralModule } from './module/general/general.module';
import { UserModule } from './module/user/user.module';

import { SignupComponent } from './components/general/signup/signup.component';
import { LoginComponent } from './components/general/login/login.component';
import { UserDashboardComponent } from './module/user/user-dashboard.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  // {path:'',component:UserDashboardComponent}
];

@NgModule({
  imports: [
    GeneralModule,
    UserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
