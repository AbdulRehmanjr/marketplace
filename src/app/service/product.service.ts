import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private base_url = 'http://localhots:8080/product/'
  constructor(private http:HttpClient) { }

  get_all_product_by_wardrobe_id(wardrobeId:string){
    return this.http.get(`${this.base_url}/wardrobe/${wardrobeId}`)
  }
  saveProduct(product:string,files:File[]){

    return this.http.post(`${this.base_url}/save`,{product,files})
  }
}
