import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';

import { LandingpageComponent } from 'src/app/components/general/landingpage/landingpage.component';

import { GeneralComponent } from './general.component';
import { HeaderComponent } from '../../components/header/header.component';



const routes:Routes =[
  {path:'',component:LandingpageComponent}
]

@NgModule({
  declarations: [
    GeneralComponent,
    LandingpageComponent,
    HeaderComponent
  ],
  imports: [
    MatBadgeModule,
    MatIconModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class GeneralModule { }
