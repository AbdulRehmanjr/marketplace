import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../class/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private base_url = 'http://localhost:8080/api/v1/product'
  constructor(private http:HttpClient) { }


  getProductById(id:string){
    return this.http.get(`${this.base_url}/${id}`);
  }
  getAllProducts(){
    return this.http.get(`${this.base_url}/all`)
  }
  get_all_product_by_wardrobe_id(wardrobeId:string){
    return this.http.get(`${this.base_url}/wardrobe/${wardrobeId}`)
  }
  saveProduct(product:string,file1:File,file2:File){

    let formData = new FormData()
    formData.append('product',product)
    formData.append('image1',file1)
    formData.append('image2',file2)

    return this.http.post(`${this.base_url}/save`,formData,{responseType:'text'})
  }
  updateProduct(product:Product){
    return this.http.put(`${this.base_url}/update`,product,{responseType:'text'})
  }
}
