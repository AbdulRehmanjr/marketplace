import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GoogleSigninButtonModule,SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { LandingpageComponent } from 'src/app/components/general/landingpage/landingpage.component';

import { GeneralComponent } from './general.component';
import { HeaderComponent } from '../../components/general/header/header.component';
import { LoginComponent } from '../../components/general/login/login.component';
import { SignupComponent } from '../../components/general/signup/signup.component';



const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: LoginComponent },
  {path:'signup',component:SignupComponent}
]

@NgModule({
  declarations: [
    GeneralComponent,
    LandingpageComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatIconModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('898910952519-soli4vfc9lo5dcn5mk4aljkomiga7e6h.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    }]
})
export class GeneralModule { }
