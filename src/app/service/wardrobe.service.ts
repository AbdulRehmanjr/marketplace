import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wardrobe } from '../class/wardrobe';

@Injectable({
  providedIn: 'root'
})
export class WardrobeService {

  private baseUrl = 'http://localhost:8080/api/v1/wardrobe'

  constructor(private http:HttpClient) { }

  saveWardrobe(data:Wardrobe):any{
    return this.http.post(`${this.baseUrl}/create`,data,{responseType:'text'})
  }
  getwarrobesByUserId(userId:string){
    return this.http.get(`${this.baseUrl}/user/${userId}`)
  }
}
