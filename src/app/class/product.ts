import { Category } from "./category"
import { Wardrobe } from "./wardrobe"

export class Product {
  productId:string
  productName:string
  basePrice:string
  image1:string
  image2:string
  description:string
  reviews:number
  category:Category
  wardrobe:Wardrobe
}
