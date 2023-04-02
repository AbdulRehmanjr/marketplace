import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = 'http://localhost:8080/api/v1/user'
  constructor(
    private _http:HttpClient
  ) { }

  saveUser(user:User,file:File){
    const formData = new FormData()
    formData.append('file', file)
    formData.append('user',JSON.stringify(user))

    if (formData == null || formData == undefined) {
      console.log("File is null")
    } else {
      console.log("File is not null")
    }
    return this._http.post(`${this.baseUrl}/register`, formData,{responseType:'text'})
  }
}
