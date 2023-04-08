import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  @Input()
  view:number
  userId:string

  constructor(private router:Router){}
  ngOnInit(): void {

    this.userId = JSON.parse(sessionStorage.getItem('user'))['userId']
  }
  logout(){
    sessionStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

}
