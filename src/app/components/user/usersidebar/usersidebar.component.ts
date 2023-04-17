import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent  implements OnInit{

  userId:any
  constructor(
    private route:Router){}

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user'))['userId']
  }

  logOut(){
    localStorage.removeItem('token')
    this.route.navigate([''])
  }
}
