import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { Favouriteproduct } from 'src/app/class/favouriteproduct';
import { Item } from 'src/app/class/item';
import { Product } from 'src/app/class/product';
import { User } from 'src/app/class/user';
import { CartService } from 'src/app/service/cart.service';
import { FavouriteproductService } from 'src/app/service/favouriteproduct.service';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items: MenuItem[];
  selectedImage: any
  products: Product[]
  currentSize: number = 6
  userId: string

  images: any[] = [
    "assets/images/banner/static/banner2.jpeg",
    "assets/images/banner/static/banner3.jpeg",
    "assets/images/banner/static/banner4.jpeg",
  ]
  selectedOption: string

  constructor(private productService: ProductService,
    private favourite: FavouriteproductService,
    private cartService:CartService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.sidebar()
    this.fetchAllProducts()
    //* select the banner image from  3 images
    this.selectedImage = this.images[Math.floor(Math.random() * 3)]
    this.userId = JSON.parse(localStorage.getItem('user'))['userId']

  }
  //! may be change in future versions
  addToCart(product:Product){

    let item = new Item()
    item.product = product

    console.log('Item',item)
    const isAdded :boolean = this.cartService.addInCart(item)

    if(isAdded){
      //* show message
     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item Added to Cart' });
     return
    }
    //* show message
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Already in Cart' });

  }
  addFavourite(product: Product) {
    let user = new User()
    user.userId = this.userId
    let fav  = new Favouriteproduct()
    fav.user = user
    fav.product = product

    this.favourite.saveFavouriteProduct(fav).subscribe({
     next:(data)=>{
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item Added to Favourite.' });
     },
     error:(err)=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Already in Favourite List.' });
     },
     complete:()=>{
       console.log('Add favourite completed')
     }
    })

 }

  //* show more products later we will change the number
  showMore() {
    this.currentSize = this.currentSize + 4
  }
  //* fetching all products
  fetchAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      {
        next: (products: Product[]) => {
          this.products = products
        },
        error: () => {
          console.log('Error fetching all products')
        },
        complete: () => {
          console.log('Product Fetching Completed')
        }
      }
    )
  }

  filterPrice(range: string) {
    let converter = +range
    console.log('converter ', converter)
    this.products = this.products
      .filter(product => product.basePrice <= converter)
      .sort((a, b) => a.basePrice - b.basePrice)
  }

  filterRating(rating: number) {
    console.log('rating', rating)
  }

  filterSize(size: string) {
    console.log('size', size)
  }
  sidebar() {
    this.items = [
      {
        label: 'Price',
        icon: 'pi pi-fw pi-dollar',
        items: [
          {
            label: '< 100',
            icon: 'pi pi-fw pi-dollar',
            command: () => {
              this.filterPrice('100')
            }
          },
          {
            label: '< 200',
            icon: 'pi pi-fw pi-dollar',
            command: () => {
              this.filterPrice('200')
            }
          },
          {
            label: '< 300',
            icon: 'pi pi-fw pi-dollar',
            command: () => {
              this.filterPrice('300')
            }
          }, {
            label: '< 400',
            icon: 'pi pi-fw pi-dollar',
            command: () => {
              this.filterPrice('400')
            }
          }, {
            label: '< 500',
            icon: 'pi pi-fw pi-dollar',
            command: () => {
              this.filterPrice('500')
            }
          }, {
            label: '>500',
            icon: 'pi pi-fw pi-dollar',
            command: () => {
              this.filterPrice('501')
            }
          }
        ]
      },
      {
        label: 'Size',
        icon: 'fa-solid fa-shirt',
        items: [
          {
            label: 'Small',
            icon: 'fa-solid fa-user-tie',
            command: () => {
              this.filterSize('Small')
            }
          },
          {
            label: 'Medium',
            icon: 'fa-solid fa-user-tie',
            command: () => {
              this.filterSize('Small')
            }
          },
          {
            label: 'Large',
            icon: 'fa-solid fa-user-tie',
            command: () => {
              this.filterSize('Small')
            }
          },
          {
            label: 'Extra Large',
            icon: 'fa-solid fa-user-tie',
            command: () => {
              this.filterSize('Small')
            }
          }
        ]
      }, {
        label: 'Rating',
        icon: 'fa-solid fa-star',
        items: [
          {
            label: '1',
            icon: 'fa-solid fa-star',
            command: () => {
              this.filterRating(1.0)
            }
          },
          {
            label: '2',
            icon: 'fa-solid fa-star',
            command: () => {
              this.filterRating(2.0)
            }
          },
          {
            label: '3',

            icon: 'fa-solid fa-star',
            command: () => {
              this.filterRating(3.0)
            }
          },
          {
            label: '4',
            icon: 'fa-solid fa-star',
            command: () => {
              this.filterRating(4.0)
            }
          },
          {
            label: '5',
            icon: 'fa-solid fa-star',
            command: () => {
              this.filterRating(5.0)
            }
          }
        ]
      },
    ];
  }
}
