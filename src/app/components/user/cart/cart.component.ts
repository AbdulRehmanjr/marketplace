import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/class/item';
import { Product } from 'src/app/class/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  items:any[] = [
    {
      itemId:'s',
      product:{
        productId:'',
        productName:'PRoduct 1',
        image1:'assets/images/product/product-b-1.jpg',
        basePrice:20
        }
      },
    ]

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    // this.fetchCartItems()
  }

  //* fetching products from cart
  fetchCartItems(){

    this.items = this.cartService.getCartDetails()

  }

}
