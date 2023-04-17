import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  userId:string
  islogin:boolean = false

  ngOnInit(): void {
   this.islogin= this.checkLogin()
  }

  checkLogin(){
    this.userId = JSON.parse(sessionStorage.getItem('user'))['userId']
    if(this.userId){
      return true
    }
      return false
  }

}
