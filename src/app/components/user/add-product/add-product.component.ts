import { Component, OnInit } from '@angular/core';
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


  constructor(private _form:FormBuilder,
    private wardrobe:WardrobeService,
    private category:CategoryService,
    private productService: ProductService
    ){}


  ngOnInit(): void {
    this.productForm = this._form.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      category:new FormControl('',[Validators.required]),
      wardrobe:new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      review:new FormControl('',[Validators.required])
    });
    this.getWardobes()
    this.getCategories()
  }


  getWardobes(){
    let userId = JSON.parse(sessionStorage.getItem('user'))['userId']
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
      console.log("File changed / selected")
    }
  }
  onChange2(event:any){
    this.image2 = event.target.files[0]
    if (this.image1) {
      console.log("File changed / selected")
    }
  }
  OnSubmit(){
    let product = new Product()

    product.productName = this.productForm.get('name').value
    product.basePrice = this.productForm.get('price').value
    product.category.id = this.productForm.get('category').value
    product.wardrobe.id = this.productForm.get('wardrobe').value
    product.description = this.productForm.get('description').value
    product.reviews = this.productForm.get('review').value

    let files:File[]
    files.push(this.image1)
    files.push(this.image2)
    this.productService.saveProduct(String(product), files).subscribe(
      {
        next:(data:any)=>{
          Swal.fire('Sucessfully Added','Data added successfully','success')
        },
        error:(err:any)=>{
          Swal.fire('Error','Error ','error')
        },
        complete:()=>{
          console.log('Added Success')
        }
      }
    )
  }
}
