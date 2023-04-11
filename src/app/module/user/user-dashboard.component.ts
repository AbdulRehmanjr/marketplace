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
  sidebarVisible: boolean;
      items: MenuItem[];
  userId: any;

  constructor(private router:Router){}
     ngOnInit() {
      // $('.toggle-sidebar-btn').click(function() {
      //   $('aside').toggle();
      //   $('main').toggleClass('col-md-12 col-md-10');
      // });

          this.items = [
              {
                  label: 'Home',
                  icon: 'assets/images/svg/home.svg'
              },
              {
                  label: 'Wardrobe',
                  icon: 'assets/images/svg/wardrobe.svg'
              },
              {
                  label: 'Following',
                  icon: 'assets/images/svg/following.svg'
              },
              {
                  label: 'Trash',
                  icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
              }
          ];
          this.userId = JSON.parse(sessionStorage.getItem('user'))['userId']
        }
        logout(){
          sessionStorage.removeItem('user')
          this.router.navigate(['/login'])
        }

      // toggle(){
      //   this.sidebarVisible = true;
      // }
}
