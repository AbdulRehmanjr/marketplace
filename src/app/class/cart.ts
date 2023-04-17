import { Item } from "./item"

export class Cart {
  cartId:string
  items:Item[]
  totalAmount:number = 0
}
