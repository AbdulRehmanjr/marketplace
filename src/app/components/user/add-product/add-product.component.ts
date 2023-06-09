import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/class/category';
import { Product } from 'src/app/class/product';
import { Wardrobe } from 'src/app/class/wardrobe';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { WardrobeService } from 'src/app/service/wardrobe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  productForm:FormGroup
  image1:File
  image2:File

  categories:Category[]

  wardrobes:Wardrobe[]

  @Output()
  productAdded = new EventEmitter<boolean>()

  @Input()
  view :string

  @Input()
  productUpdate:Product

  constructor(private _form:FormBuilder,
    private wardrobe:WardrobeService,
    private category:CategoryService,
    private productService: ProductService
    ){}


  ngOnInit(): void {
    console.log(this.productUpdate)
    this.productForm = this._form.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      category:new FormControl('',[Validators.required]),
      wardrobe:new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      review:new FormControl('',[Validators.required]),
      status:new FormControl('',[Validators.required])
    });
    this.getWardobes()
    this.getCategories()
  }


  getWardobes(){
    let userId = JSON.parse(localStorage.getItem('user'))['userId']
    this.wardrobe.getwarrobesByUserId(userId).subscribe(
      {
        next:(data:any)=>{
          this.wardrobes = data
        },
        error:(err:any)=>{
          console.log(err.Error)
        },
        complete:()=>{
          console.log('wardrob efecthign completed')
        }
      }
    )
  }

  getCategories(){
    this.category.get_all_categories().subscribe({
      next:(data:Category[])=>{
        this.categories = data
      },
      error:(err:any)=>{
        console.log(err.Error)
      },
      complete:()=>{
        console.log('Fetching categories completed')
      }
    })
  }

  onChange1(event:any){
    this.image1 = event.target.files[0]
    if (this.image1) {
      console.log(this.image1)
      console.log("File changed / selected")
    }
  }
  onChange2(event:any){
    this.image2 = event.target.files[0]
    if (this.image1) {
      console.log(this.image2)
      console.log("File changed / selected")
    }
  }
  OnSubmit(){
    let product = new Product()
    let category = new Category()
    let wardrobe = new Wardrobe()


    product.productName = this.productForm.get('name').value

    product.basePrice = this.productForm.get('price').value

    category.categoryId = this.productForm.get('category').value
    product.category = category

    wardrobe.id = this.productForm.get('wardrobe').value
    product.wardrobe = wardrobe

    product.description = this.productForm.get('description').value

    product.status = this.productForm.get('status').value
    // product.reviews = this.productForm.get('review').value

    this.productService.saveProduct(JSON.stringify(product),this.image1,this.image2).subscribe(
      {
        next:(data:any)=>{
          Swal.fire('Sucessfully Added','Data added successfully','success')
        },
        error:(err:any)=>{
          console.error(err)
          Swal.fire('Error',`${err.Error}`,'error')

        },
        complete:()=>{
          console.log('Added Success')
          this.productAdded.emit(true)
        }
      }
    )
  }

  updateProduct(){
    let product = new Product()
    product.productId = this.productUpdate.productId
    product.basePrice = this.productUpdate.basePrice
    product.productName = this.productUpdate.productName
    product.status = this.productUpdate.status
    product.description = this.productUpdate.description

    this.productService.updateProduct(product).subscribe({
      next:(data:any)=>{
        Swal.fire('Sucessfully Updated','Data updated successfully','success')
      },
      error:(err:any)=>{
        Swal.fire('Error','Error updating product','error')
      },
      complete:()=>{
        this.productAdded.emit(true)
      }
    })
  }
}
