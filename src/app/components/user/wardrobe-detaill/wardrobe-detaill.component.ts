import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/class/product';
import { User } from 'src/app/class/user';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-wardrobe-detaill',
  templateUrl: './wardrobe-detaill.component.html',
  styleUrls: ['./wardrobe-detaill.component.css']
})
export class WardrobeDetaillComponent implements OnInit {


  displayDialog: boolean = false
  updateDialog: boolean = false
  productUpdate:Product
  wardrobeId: string

  products: Product[];

  submitted: boolean;


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.wardrobeId = this.route.snapshot.paramMap.get('wardrobeId')
    console.log('id', this.wardrobeId)
    this.get_all_products_by_wardrobe()
  }

  get_all_products_by_wardrobe() {
    // later on change this to dynamic
    this.productService.get_all_product_by_wardrobe_id(this.wardrobeId).subscribe(
      {
        next: (data: Product[]) => {
          this.products = data
        },
        error: (err) => {
          console.log(err.Error)
        },
        complete: () => {
          console.log('fecthing completed')
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
    this.get_all_products_by_wardrobe()
  }

  saveProduct() {
    this.submitted = true;
  }


  deleteProduct(_t43: any) {

    }
    editProduct(product: Product) {
      console.log('product coming from details',product)
      this.updateDialog = true
      this.productUpdate = product
    }

}

