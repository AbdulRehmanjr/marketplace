import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import * as $ from 'jquery'
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent  implements OnInit {
  sidebarVisible: boolean;
      items: MenuItem[];

     ngOnInit() {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

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
      }

      toggle(){
        this.sidebarVisible = true;
      }
}
