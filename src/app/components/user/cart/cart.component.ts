import { Component } from '@angular/core';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  products:any[] = [
    {
      id:1,
      title:'Product 1',
      price:'780'
    },
    {
      id:1,
      title:'Product 2',
      price:'780'
    },
    {
      id:1,
      title:'Product 3',
      price:'780'
    },
    {
      id:1,
      title:'Product 4',
      price:'780'
    },
    {
      id:1,
      title:'Product 5',
      price:'780'
    },
    {
      id:1,
      title:'Product 6',
      price:'780'
    },
    {
      id:1,
      title:'Product 7',
      price:'780'
    },

  ]
}
