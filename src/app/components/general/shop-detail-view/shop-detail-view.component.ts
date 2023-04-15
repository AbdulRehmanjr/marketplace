import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/class/product';
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

  constructor(private productService: ProductService,
    private route:ActivatedRoute){}
  ngOnInit(): void {
    //* getting id from url
     this.id = this.route.snapshot.paramMap.get('productId')

     //*  getting product
     this.fetchProduct()

  }

  fetchProductsByWardrobeId(id:string){
    this.productService.get_all_product_by_wardrobe_id(id).subscribe({
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
}
