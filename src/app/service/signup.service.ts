import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }

  signup(user:any){
    console.log('user',user)
    return ''
  }
}
