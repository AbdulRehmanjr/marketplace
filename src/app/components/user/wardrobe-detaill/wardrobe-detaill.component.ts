import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favouriteproduct } from 'src/app/class/favouriteproduct';
import { Product } from 'src/app/class/product';
import { User } from 'src/app/class/user';
import { FavouriteproductService } from 'src/app/service/favouriteproduct.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-wardrobe-detaill',
  templateUrl: './wardrobe-detaill.component.html',
  styleUrls: ['./wardrobe-detaill.component.css']
})
export class WardrobeDetaillComponent implements OnInit {

  displayDialog: boolean = false
  updateDialog: boolean = false
  productUpdate: Product
  wardrobeId: string = ''
  products: Product[] = []
  submitted: boolean = false
  validate: boolean = true
  currentUserId:string =''
  currentSize:number = 8

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private favourite:FavouriteproductService
    ) { }

  ngOnInit(): void {
    this.wardrobeId = this.route.snapshot.paramMap.get('wardrobeId')
    this.fetchPoductsByWardrobe()
    this.currentUserId = JSON.parse(localStorage.getItem('user'))['userId']
  }

  private checkProfile(userId: string, currentId: string): boolean {

    if (userId == currentId) {
      return true
    }
    return false
  }

  fetchPoductsByWardrobe() {
    this.productService.getProductsByWardrobeId(this.wardrobeId).subscribe(
      {
        next: (data: Product[]) => {
          this.products = data
        },
        error: (err) => {
          console.log(err.Error)
        },
        complete: () => {
          console.log(this.products)
          const userId = this.products[0].wardrobe.user.userId
          this.validate = this.checkProfile(userId, this.currentUserId)
          console.log('Fetching Products by wardrobe completed.')
        }
      }
    )
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


  showDialog() {
    this.displayDialog = true
  }

  hideDialog() {
    this.displayDialog = false
    this.updateDialog = false
    this.fetchPoductsByWardrobe()
  }

  saveProduct() {
    this.submitted = true;
  }


  deleteProduct(_t43: any) {

  }
  editProduct(product: Product) {
    console.log('product coming from details', product)
    this.updateDialog = true
    this.productUpdate = product
  }
  addFavourite(product: Product) {
    let user = new User()
    user.userId = this.currentUserId
    let fav = new Favouriteproduct()
    fav.user = user
    fav.product = product
    console.log(fav)
    this.favourite.saveFavouriteProduct(fav).subscribe({
      next: (data) => {
        console.log('Message', data)
      },
      error: (err) => {
        console.log('Error', err)
      },
      complete: () => {
        console.log('Add favourite completed')
      }
    })

  }
}

