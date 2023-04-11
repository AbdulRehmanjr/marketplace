import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private base_url = 'http://localhots:8080/product'
  constructor(private http:HttpClient) { }

  get_all_product_by_wardrobe_id(wardrobeId:string){
    return this.http.get(`${this.base_url}/wardrobe/${wardrobeId}`)
  }
  saveProduct(product:string,file1:File,file2:File){

    let formData = new FormData()
    formData.append('product',product)
    // formData.append('files',)
let files :any
    return this.http.post(`${this.base_url}/save`,{product,files})
  }
}
