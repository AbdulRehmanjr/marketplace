import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  isLogin:boolean = false
  userId:string

  ngOnInit(): void {
    this.userId = JSON.parse(sessionStorage.getItem('user'))['userId']
    this.isLogin = this.checkLogin()
    console.log('header component init')
  }
  checkLogin():boolean{
    if(this.userId){
      return true
    }
    return false
  }
  categories:any[] = [
    {
      id:0,
      name:'category',
      image:'fa-solid fa-list'
    },
    {
      id:0,
      name:'category',
      image:'fa-solid fa-list'
    },
    {
      id:0,
      name:'category',
      image:'fa-solid fa-list'
    },
    {
      id:0,
      name:'category',
      image:'fa-solid fa-list'
    },
    {
      id:0,
      name:'category',
      image:'fa-solid fa-list'
    },
    {
      id:0,
      name:'category',
      image:'fa-solid fa-list'
    },
    {
      id:0,
      name:'category',
      image:'fa-solid fa-list'
    }
  ]

}
