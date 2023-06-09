import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoogleSigninButtonModule, SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';


import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { GalleriaModule } from 'primeng/galleria';
import { DividerModule } from 'primeng/divider';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollTopModule } from 'primeng/scrolltop';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { BadgeModule } from 'primeng/badge';

import { NgxTypedJsModule } from 'ngx-typed-js';


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
import { MessageService } from 'primeng/api';
import { AuctionComponent } from '../../components/general/auction/auction.component';




const routes: Routes = [
  {
    path: '', component: GeneralComponent, children: [
      { path: '', component: LandingpageComponent },
      { path: 'shop', component: ShopComponent },
      {path:'auction',component:AuctionComponent},
      { path: 'product-detail/:productId', component: ShopDetailViewComponent }
    ]
  }
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
    AuctionComponent,
  ],
  imports: [
    BadgeModule,
    MessagesModule,
    ToastModule,
    PaginatorModule,
    DropdownModule,
    ScrollTopModule,
    PanelMenuModule,
    DividerModule,
    GalleriaModule,
    SidebarModule,
    CarouselModule,
    NgxTypedJsModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
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
    },
    MessageService
  ]
})
export class GeneralModule { }
