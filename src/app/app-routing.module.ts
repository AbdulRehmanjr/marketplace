import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralModule } from './module/general/general.module';

import { SignupComponent } from './components/general/signup/signup.component';
import { LoginComponent } from './components/general/login/login.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [
    GeneralModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
