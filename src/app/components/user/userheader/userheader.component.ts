import { Component, OnInit } from '@angular/core';
import { _deprecated } from 'chart.js/dist/helpers/helpers.core';

import * as $ from 'jquery'

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit{
userId: any;
logOut() {
throw new Error('Method not implemented.');
}

  constructor( ){}

  ngOnInit(): void {

  }
}
