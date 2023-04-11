import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as $ from 'jquery'
import { ToggleService } from 'src/app/service/toggle.service';
@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit{

  constructor(private toggle:ToggleService){}

  ngOnInit(): void {

  }
  toggleme(){
    this.toggle.emitData();
 }
}
