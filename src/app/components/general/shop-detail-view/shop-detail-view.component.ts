import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favouriteproduct } from 'src/app/class/favouriteproduct';
import { Item } from 'src/app/class/item';
import { Product } from 'src/app/class/product';
import { User } from 'src/app/class/user';
import { CartService } from 'src/app/service/cart.service';
import { FavouriteproductService } from 'src/app/service/favouriteproduct.service';
import { ProductService } from 'src/app/service/product.service';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shop-detail-view',
  templateUrl: './shop-detail-view.component.html',
  styleUrls: ['./shop-detail-view.component.css']
})
export class ShopDetailViewComponent implements OnInit {

  product: Product
  products: Product[] = []
  id: string
  userId: string

  constructor(
    private formBuilder:FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private favourite: FavouriteproductService,
    private cartService: CartService,
    private messageService: MessageService) { }

  ngOnInit(): void {

    //* getting id from url
    this.id = this.route.snapshot.paramMap.get('productId')

    //*  getting product
    this.fetchProduct()
    this.userId = JSON.parse(localStorage.getItem('user'))['userId']

  }

  //* fetch products by wardrobe id
  fetchProductsByWardrobeId(id: string) {
    this.productService.getProductsByWardrobeId(id).subscribe({
      next: (data: Product[]) => {
        this.products = data
      },
      error: () => {
        console.log('Error')
      },
      complete: () => {
        console.log('Product Fetching from wardrobe done')
      }
    })
  }

  //* fetch products
  fetchProduct() {
    this.productService.getProductById(this.id).subscribe({
      next: (data: Product) => {
        this.product = data
      },
      error: () => {
        console.log('Error')
      },
      complete: () => {
        console.log('Fetching Product completed')

        this.fetchProductsByWardrobeId(this.product.wardrobe.id)
      }
    })
  }

  //* selected product
  checkProduct(product: Product) {
    this.product = product
  }

  //! may be change in future versions
  addToCart(product: Product) {

    let item = new Item()
    item.product = product

    console.log('Item', item)
    const isAdded: boolean = this.cartService.addInCart(item)

    if (isAdded) {
      //* show message
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item Added to Cart' });
      return
    }
    //* show message
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Already in Cart' });

  }

  //* add to Favourite list
  addFavourite(product: Product) {

    let user = new User()
    user.userId = this.userId

    let fav = new Favouriteproduct()
    fav.user = user
    fav.product = product

    this.favourite.saveFavouriteProduct(fav).subscribe({
      next: (data) => {
        Swal.fire('Added to Favourite List', 'Successfully', 'success')
        console.log('Message', data)
      },
      error: (err) => {
        Swal.fire('Error in adding to Favourite List', 'Error', 'error')
        console.log('Error', err)
      },
      complete: () => {
        console.log('Add favourite completed')
      }
    })

  }
}
