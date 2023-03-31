import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/class/category';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent  implements OnInit{
  ngOnInit(): void {
    console.log('landinf pageinit')
  }

 }
