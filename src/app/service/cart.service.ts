import { Injectable } from '@angular/core';
import { Item } from '../class/item';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'src/assets/vendor/tinymce/tinymce';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items:Item[] = []
  private totalItems = new BehaviorSubject<number>(0)
  constructor() { }

  addInCart(item:Item):boolean{

    for(let i of this.items){
      if(i.product.productId==item.product.productId){
        return false
      }
    }

    this.items.push(item)
    this.totalItems.next(this.totalItems.value + 1)
    return true
  }

  getCartDetails(){
    return this.items
  }

  getTotalNumbers(){
    return this.totalItems.asObservable()
  }
}
