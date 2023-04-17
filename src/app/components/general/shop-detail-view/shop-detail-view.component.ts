import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favouriteproduct } from 'src/app/class/favouriteproduct';
import { Product } from 'src/app/class/product';
import { User } from 'src/app/class/user';
import { FavouriteproductService } from 'src/app/service/favouriteproduct.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-shop-detail-view',
  templateUrl: './shop-detail-view.component.html',
  styleUrls: ['./shop-detail-view.component.css']
})
export class ShopDetailViewComponent implements OnInit{

  product:Product
  products:Product[] = []
  id:string
  userId:string
  constructor(private productService: ProductService,
    private route:ActivatedRoute,
    private favourite:FavouriteproductService){}
  ngOnInit(): void {
    //* getting id from url
     this.id = this.route.snapshot.paramMap.get('productId')

     //*  getting product
     this.fetchProduct()

  }

  fetchProductsByWardrobeId(id:string){
    this.productService.getProductsByWardrobeId(id).subscribe({
      next:(data:Product[])=>{
        this.products = data
      },
      error:()=>{
        console.log('Error')
      },
      complete:()=>{
        console.log('Product Fetching from wardrobe done')
      }
    })
  }
  fetchProduct(){
    this.productService.getProductById(this.id).subscribe({
      next:(data:Product)=>{
          this.product = data
      },
      error:()=>{
        console.log('Error')
      },
      complete:()=>{
        console.log('Fetching Product completed')

        this.fetchProductsByWardrobeId(this.product.wardrobe.id)
      }
    })
  }

  //* selected product
  checkProduct(product:Product){
    this.product = product
  }
  addFavourite(product: Product) {
    let user = new User()
    user.userId = this.userId
    let fav  = new Favouriteproduct()
    fav.user = user
    fav.product = product
    console.log(fav)
    this.favourite.saveFavouriteProduct(fav).subscribe({
     next:(data)=>{
       console.log('Message',data)
     },
     error:(err)=>{
       console.log('Error',err)
     },
     complete:()=>{
       console.log('Add favourite completed')
     }
    })

 }
}
