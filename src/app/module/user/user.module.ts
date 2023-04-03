import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// prime ng modules
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';


//angular module
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

// components
import { UserDashboardComponent } from './user-dashboard.component';
import { AddWardrobeComponent } from 'src/app/components/user/add-wardrobe/add-wardrobe.component';
import { ListWardrobeComponent } from 'src/app/components/user/list-wardrobe/list-wardrobe.component';
import { AddProductComponent } from '../../components/user/add-product/add-product.component';
import { ProfileComponent } from '../../components/user/profile/profile.component';
import { SidebarComponent } from '../../components/user/sidebar/sidebar.component';
import { FavouriteComponent } from '../../components/user/favourite/favourite.component';


const routes:Routes=[
  {path:'',component:UserDashboardComponent,children:[
    {
      path:'',component:ProfileComponent,
    },
    {
      path:'wardrobe',component:ListWardrobeComponent
    },
    {
      path:'add-product',component:AddProductComponent
    },
    {
      path:'favourite',component:FavouriteComponent
    }
  ]}
]
@NgModule({
  declarations: [
    ListWardrobeComponent,
    AddWardrobeComponent,
    UserDashboardComponent,
    AddProductComponent,
    ProfileComponent,
    SidebarComponent,
    FavouriteComponent
  ],
  imports: [
    MatListModule,
    MatCardModule,
    TabViewModule,
    CardModule,
    SidebarModule,
    InputTextModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class UserModule { }
