import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/service/toggle.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent  implements OnInit{

  userId:any
  constructor(public toggle:ToggleService){}

  ngOnInit(): void {

    this.userId = JSON.parse(sessionStorage.getItem('user'))['userId']
  }
}
