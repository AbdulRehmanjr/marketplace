import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Product } from 'src/app/class/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items: MenuItem[];
  selectedImage: any
  products:Product[]
  currentSize:number = 2
  value:number = 5
  images: any[] = [
    "assets/images/banner/static/banner2.jpeg",
    "assets/images/banner/static/banner3.jpeg",
    "assets/images/banner/static/banner4.jpeg",
  ]
  options:any[]=[
    'By Name',
    'By Price',
    'By Rating'
  ]
  selectedOption:string
  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.sidebar()
    this.fetchAllProducts()
    //* select the banner image from  3 images
    this.selectedImage = this.images[Math.floor(Math.random() * 3)]
  }


  //* show more products later we will change the number
  showMore(){
    this.currentSize = this.currentSize + 2
  }
  //* fetching all products
  fetchAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      {
        next:(products:Product[])=>{
          this.products = products
        },
        error:()=>{
          console.log('Error fetching all products')
        },
        complete:()=>{
          console.log('Product Fetching Completed')
        }
      }
    )
  }

  filterPrice(range: string) {
      let converter = +range
      console.log('converter ',converter)
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
  sidebar(){
    this.items = [
      {
        label: 'Price',
        icon: 'pi pi-fw pi-dollar',
        items: [
          {
            label: '< 100',
            icon: 'pi pi-fw pi-dollar',
            command:()=>{
              this.filterPrice('100')
            }
          },
          {
            label: '< 200',
             icon: 'pi pi-fw pi-dollar',
            command:()=>{
              this.filterPrice('200')
            }
          },
          {
            label: '< 300',
             icon: 'pi pi-fw pi-dollar',
            command:()=>{
              this.filterPrice('300')
            }
          }, {
            label: '< 400',
             icon: 'pi pi-fw pi-dollar',
            command:()=>{
              this.filterPrice('400')
            }
          }, {
            label: '< 500',
             icon: 'pi pi-fw pi-dollar',
            command:()=>{
              this.filterPrice('500')
            }
          }, {
            label: '>500',
            icon: 'pi pi-fw pi-dollar',
            command:()=>{
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
            icon:'fa-solid fa-user-tie',
            command:()=>{
              this.filterSize('Small')
            }
          },
          {
            label: 'Medium',
             icon:'fa-solid fa-user-tie',
             command:()=>{
              this.filterSize('Small')
             }
          },
          {
            label: 'Large',
             icon:'fa-solid fa-user-tie',
             command:()=>{
              this.filterSize('Small')
             }
          },
          {
            label: 'Extra Large',
             icon:'fa-solid fa-user-tie',
             command:()=>{
              this.filterSize('Small')
             }
          }
        ]
      }, {
        label: 'Rating',
        icon: 'fa-solid fa-star',
        items: [
          {
            label:'1',
            icon:'fa-solid fa-star',
            command:()=>{
              this.filterRating(1.0)
            }
          },
          {
            label:'2',
            icon:'fa-solid fa-star',
             command:()=>{
              this.filterRating(2.0)
             }
          },
          {
            label:'3',

            icon:'fa-solid fa-star',
             command:()=>{
              this.filterRating(3.0)
             }
          },
          {
            label:'4',
            icon:'fa-solid fa-star',
             command:()=>{
              this.filterRating(4.0)
             }
          },
          {
            label:'5',
            icon:'fa-solid fa-star',
             command:()=>{
              this.filterRating(5.0)
             }
          }
        ]
      },
    ];
  }
}
