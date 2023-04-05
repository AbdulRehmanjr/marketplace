import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private userInfo = 'http://localhost:8080/api/v1/user'
  private userFollowing = 'http://localhost:8080/api/v1/following'

  private userId = '6b0d00c4-62cb-47eb-a095-b563ee72fbab'
  constructor(private _http: HttpClient) {}

  getuserInfo(){
    return this._http.get(`${this.userInfo}/${this.userId}`)
  }

  getFollowingInfo(){
    return this._http.get(`${this.userFollowing}/user/${this.userId}`)
  }

}
