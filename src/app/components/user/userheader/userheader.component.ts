import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { _deprecated } from 'chart.js/dist/helpers/helpers.core';

import * as $ from 'jquery'

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {
  userId: any
  dsda:any
  constructor(
    private route: Router) { }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user'))['userId']
  }

  logOut() {
    localStorage.removeItem('token')
    this.route.navigate([''])
  }
}
