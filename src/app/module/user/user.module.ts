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
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { SplitterModule } from 'primeng/splitter';
//angular module
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

// components
import { UserDashboardComponent } from './user-dashboard.component';
import { AddWardrobeComponent } from 'src/app/components/user/add-wardrobe/add-wardrobe.component';
import { ListWardrobeComponent } from 'src/app/components/user/list-wardrobe/list-wardrobe.component';
import { AddProductComponent } from '../../components/user/add-product/add-product.component';
import { ProfileComponent } from '../../components/user/profile/profile.component';
import { FavouriteComponent } from '../../components/user/favourite/favourite.component';
import { WardrobeDetaillComponent } from '../../components/user/wardrobe-detaill/wardrobe-detaill.component';
import { SearchComponent } from 'src/app/components/user/search/search.component';
import { UserListComponent } from 'src/app/components/user/user-list/user-list.component';
import { UserheaderComponent } from '../../components/user/userheader/userheader.component';
import { UsersidebarComponent } from '../../components/user/usersidebar/usersidebar.component';


const routes:Routes=[
  {path:'user-dashboard',component:UserDashboardComponent,children:[
    {
      path:'profile/my/:userId',component:ProfileComponent
    },
    {
      path:'profile/:userId',component:ProfileComponent,
    },

    {
      path:'wardrobe',component:ListWardrobeComponent
    },
    {
      path:'wardrobe-detail/:wardrobeId',component:WardrobeDetaillComponent
    },
    {
      path:'add-product',component:AddProductComponent
    },
    {
      path:'favourite',component:FavouriteComponent
    },
    {
      path:'search',component:SearchComponent
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
    FavouriteComponent,
    WardrobeDetaillComponent,
    SearchComponent,
    UserListComponent,
    UserheaderComponent,
    UsersidebarComponent,
  ],
  imports: [
    MatListModule,
    MatCardModule,
    TableModule,
    SplitterModule,
    TabViewModule,
    CardModule,
    DialogModule,
    VirtualScrollerModule,
    TagModule,
    MessagesModule,
    ToastModule,
    SidebarModule,
    DropdownModule,
    InputTextModule,
    ToolbarModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class UserModule { }
