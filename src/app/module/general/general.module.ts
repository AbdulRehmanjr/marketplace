import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GoogleSigninButtonModule,SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {MatDividerModule} from '@angular/material/divider';

import { LandingpageComponent } from 'src/app/components/general/landingpage/landingpage.component';

import { GeneralComponent } from './general.component';
import { HeaderComponent } from '../../components/general/header/header.component';
import { LoginComponent } from '../../components/general/login/login.component';
import { SignupComponent } from '../../components/general/signup/signup.component';
import { CategoriesComponent } from '../../components/general/categories/categories.component';
import { TrendingComponent } from '../../components/general/trending/trending.component';
import { ShopComponent } from '../../components/general/shop/shop.component';
import { ShopDetailViewComponent } from '../../components/general/shop-detail-view/shop-detail-view.component';
import { FooterComponent } from '../../components/general/footer/footer.component';




const routes: Routes = [
  {path:'',component:GeneralComponent,children:[
    {path:'',component:LandingpageComponent},
    {path:'shop',component:ShopComponent},
    {path:'shop-detail',component:ShopDetailViewComponent}
  ]}
]

@NgModule({
  declarations: [
    GeneralComponent,
    LandingpageComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    CategoriesComponent,
    TrendingComponent,
    ShopComponent,
    ShopDetailViewComponent,
    FooterComponent,
  ],
  imports: [
    NgxTypedJsModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatDividerModule,
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
