import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private userInfo = 'http://localhost:8080/api/v1/user'
  private userFollowing = 'http://localhost:8080/api/v1/following'

  constructor(private _http: HttpClient) {}

  getuserInfo(userId:string){
    return this._http.get(`${this.userInfo}/${userId}`)
  }

  getFollowingInfo(userId:string){
    return this._http.get(`${this.userFollowing}/user/following/${userId}`)
  }
  getFollowerInfo(userId:string){
    return this._http.get(`${this.userFollowing}/user/follower/${userId}`)
  }

  getUsersByUserName(userName:string){
    return this._http.get(`${this.userInfo}/all/${userName}`)
  }
  follow(userId:string, currentId:string){

    return this._http.post(`${this.userFollowing}/user/${currentId}/follow/${userId}`,null,{responseType:'text'});
  }
  unfollow(userId:string, currentId:string){
    return this._http.post(`${this.userFollowing}/user/${currentId}/unfollow/${userId}`,null,{responseType:'text'});
  }
}
