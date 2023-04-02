import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// prime ng modules
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

// components
import { UserDashboardComponent } from './user-dashboard.component';
import { AddWardrobeComponent } from 'src/app/components/user/add-wardrobe/add-wardrobe.component';
import { ListWardrobeComponent } from 'src/app/components/user/list-wardrobe/list-wardrobe.component';
import { AddProductComponent } from '../../components/user/add-product/add-product.component';


const routes:Routes=[
  {path:'',component:UserDashboardComponent,children:[
    {
      path:'',component:AddWardrobeComponent,
    },
    {
      path:'wardrobe',component:ListWardrobeComponent
    },
    {
      path:'add-product',component:AddProductComponent
    }
  ]}
]
@NgModule({
  declarations: [
    ListWardrobeComponent,
    AddWardrobeComponent,
    UserDashboardComponent,
    AddProductComponent
  ],
  imports: [
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
