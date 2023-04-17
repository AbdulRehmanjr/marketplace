import { Component } from '@angular/core';
import { Product } from 'src/app/class/product';
import { FavouriteproductService } from 'src/app/service/favouriteproduct.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {


  userId:string
  products: Product[] = []


  constructor(private favourite:FavouriteproductService) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('user'))['userId']
    this.fetchFavProduct()
  }


  fetchFavProduct(){
    this.favourite.getFavouriteProducts(this.userId).subscribe({
      next:(products:Product[])=>{
        this.products = products
      },
      error:(error:any)=>{
        console.log('Error in fetching Favourite Products',error)
      },
      complete:()=>{
        console.log('fetching favourite products completed')
      }
    })
  }
  deleteProduct(product:Product){
    this.favourite.deleteFavouriteProduct(product.productId,this.userId).subscribe({
      next:()=>{
      },
      error:(err:any)=>{
        console.log('Error in deleting fav product ',err)
      },
      complete:()=>{
        this.fetchFavProduct()
      }
    })
  }
  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
          return 'success';
      case 'OUTOFSTOCK':
          return 'danger';
  }
  return ''
}
}

