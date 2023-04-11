import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import * as $ from 'jquery'
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent  implements OnInit {


  constructor(private router:Router){}
     ngOnInit() {

        }
        logout(){
          sessionStorage.removeItem('user')
          this.router.navigate(['/login'])
        }


}
