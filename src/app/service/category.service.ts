import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private base_url = 'http://localhost:8080/api/v1/category'
  constructor(private http:HttpClient) { }

  get_all_categories(){
    return this.http.get(`${this.base_url}/all`)
  }
}
