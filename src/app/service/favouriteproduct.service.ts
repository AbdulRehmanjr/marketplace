import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favouriteproduct } from '../class/favouriteproduct';

@Injectable({
  providedIn: 'root'
})
export class FavouriteproductService {

  private baseUrl:string = 'http://localhost:8080/api/v1/favourite'

  constructor(private http:HttpClient) { }

  saveFavouriteProduct(favouriteProduct:Favouriteproduct) {
    return this.http.post(`${this.baseUrl}/saveFavouriteProduct`,favouriteProduct,{responseType:'text'});
  }

  getFavouriteProducts(userId:string){
    return this.http.get(`${this.baseUrl}/all/favourtieProducts/${userId}`)
  }
  deleteFavouriteProduct(productId:string,userId:string){
    return this.http.delete(`${this.baseUrl}/deleteProduct/${productId}/${userId}`,{responseType:'text'});
  }

}
