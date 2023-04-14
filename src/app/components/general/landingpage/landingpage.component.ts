import { Component,  OnInit,  } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent  implements OnInit{

  products:any[] =[
    {
      message1:'Men Wear',
      message2:'Hot & Packback',
      image:'../../../../assets/images/product/men.png'
    },{
      message1:"Custom Men's",
      message2:'Running Shoes',
      image:'../../../../assets/images/product/shoes.png'
    },{
      message1:"Custom Men's",
      message2:'Running Shoes',
      image:'../../../../assets/images/product/skate.png'
    }
  ]
  ngOnInit(): void {

  }

 }
