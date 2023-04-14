import { Category } from "./category"
import { Wardrobe } from "./wardrobe"

export class Product {
  productId:string
  productName:string
  basePrice:number
  image1:string
  image2:string
  description:string
  reviews:number
  status:string
  category:Category
  wardrobe:Wardrobe
}
