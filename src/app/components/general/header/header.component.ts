import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  login:boolean = true

  ngOnInit(): void {
    console.log('header component init')
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
