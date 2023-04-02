import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../class/login';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/api/v1/token'

  constructor(private _http: HttpClient) {}



  public generateToken(login: Login) {
    return this._http.post(`${this.baseUrl}` + '/generate', login, {
      responseType: 'text',
    });

  }

  public setToken(token: any) {
    if (token != null) {
      sessionStorage.setItem('token', token);
    }
  }

  public getToken() {
    return sessionStorage.getItem('token');
  }

  public getAuthority() {
    let user = JSON.parse(sessionStorage.getItem('user'))

    return user.authority;
  }

  public setUser(data: any) {

    let current_user = new User();

    current_user.email = data.userEmail;
    current_user.userName = data.userName
    current_user.authority = data.role.authority;

    sessionStorage.setItem('user', JSON.stringify(current_user));
  }

  public currentUser(loginInfo:Login) {
    return this._http.post(`${this.baseUrl}/token/current-user`,loginInfo);
  }

}
