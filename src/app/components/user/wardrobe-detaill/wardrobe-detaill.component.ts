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
export class WardrobeDetaillComponent  implements OnInit{

  displayDialog:boolean = false
  productDialog: boolean
  wardrobeId:string

  products: Product[];

  selectedProducts: Product[];

  submitted: boolean;

  statuses: any[];

  constructor(
    private productService:ProductService,
    private route:ActivatedRoute){}
  ngOnInit(): void {
  this.wardrobeId = this.route.snapshot.paramMap.get('wardrobeId')
  console.log('id',this.wardrobeId)
   this.get_all_products_by_wardrobe()
  }

  get_all_products_by_wardrobe(){
    // later on change this to dynamic
    this.productService.get_all_product_by_wardrobe_id(this.wardrobeId).subscribe(
      {
        next:(data:Product[])=>{
          this.products = data
        },
        error:(err)=>{
          console.log(err.Error)
        },
        complete:()=>{
          console.log('fecthing completed')
        }
      }
    )
  }

  openNew() {
   this.displayDialog=true
  }

deleteSelectedProducts() {
    // this.confirmationService.confirm({
    //     message: 'Are you sure you want to delete the selected products?',
    //     header: 'Confirm',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => {
    //         this.products = this.products.filter((val) => !this.selectedProducts.includes(val));
    //         this.selectedProducts = null;
    //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    //     }
    // });
}

editProduct(product: any) {
    this.products = { ...product };
    this.productDialog = true;
}

deleteProduct(product: any) {
    // this.confirmationService.confirm({
    //     message: 'Are you sure you want to delete ' + product.name + '?',
    //     header: 'Confirm',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => {
    //         this.products = this.products.filter((val) => val.id !== product.id);
    //         this.product = {};
    //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    //     }
    // });
}

hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}

saveProduct() {
    this.submitted = true;


}

findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].productId === id) {
            index = i;
            break;
        }
    }

    return index;
}

createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

getSeverity(status: string):string {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
    }
    return ''
}
}

