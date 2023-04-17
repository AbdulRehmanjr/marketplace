import { Component, OnInit } from '@angular/core';
import { _deprecated } from 'chart.js/dist/helpers/helpers.core';

import * as $ from 'jquery'
import { ToggleService } from 'src/app/service/toggle.service';
@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit{

  constructor( private toggle:ToggleService){}

  ngOnInit(): void {

  }

  /**
   * @deprecated This method is depreacted may be removed in final stages
   */
  toggleme(){
    this.toggle.emitData();
 }
}
