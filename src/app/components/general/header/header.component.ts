import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  userId:string
  islogin:boolean = false
  token:string
  constructor(private route:Router,
    private messageService:MessageService){}

  ngOnInit(): void {

   this.token = localStorage.getItem('token')
   this.userId = JSON.parse(localStorage.getItem('user'))['userId']
   this.islogin= this.checkLogin()
  }

  checkLogin(){

    if(this.userId && this.token!=undefined){
      return true
    }
      return false
  }

  openCart(){
    //! user must be logged in to acccess cart
    if(this.islogin && this.token!=undefined){
      this.route.navigate(['user-dashboard/cart'])
      return
    }
    //* show message
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Login To Access your Cart' });

  }
}
