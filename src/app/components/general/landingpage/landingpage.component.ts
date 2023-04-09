import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent  implements OnInit{
  @ViewChild('bgDiv') bgDiv: ElementRef;
  currentIndex = 0;
  imageUrls: string[] = [
    '../../../../assets/images/slider/men.jpg',
    '../../../../assets/images/slider/men.jpg',
    '../../../../assets/images/slider/men.jpg',
    //...
  ];
  products:any[] =[
    {
      image:'../../../../assets/images/product/men.png'
    },{
      image:'../../../../assets/images/product/shoes.png'
    },{
      image:'../../../../assets/images/product/skate.png'
    }
  ]
  ngOnInit(): void {
    setInterval(() => {
      const imageUrl = this.imageUrls[this.currentIndex];
      this.bgDiv.nativeElement.style.backgroundImage = `url(${imageUrl})`;
      this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    }, 4000);
  }

 }
