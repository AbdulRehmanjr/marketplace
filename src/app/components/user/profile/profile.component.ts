import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile:any
  followings:any
  user_image:any
  ownUser:boolean = true

  users: User[] = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },{
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150x150'
    },

  ];




  constructor(private profileService:ProfileService,
    private domSanitizer:DomSanitizer
    ){

  }
  ngOnInit(): void {
      this.profileService.getFollowingInfo().subscribe({
        next:(data:any)=>{
          this.followings = data
        },
        error:(err)=>{
          console.log(err)
        },
        complete:()=>{
         console.log('following info fetching completed')
        }
      })
      this.profileService.getuserInfo().subscribe({
        next:(data)=>{
            this.profile = data
            this.user_image = this.domSanitizer.bypassSecurityTrustResourceUrl(`data:image/jpeg;base64, ${this.profile.profilePicture}`);
        },
        error:(err)=>{
          console.log(err)
        },
        complete:()=>{
            console.log('completed')
        }
      })
  }



}
export interface User {
  id: number;
  name: string;
  image: string;
}
