import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/class/user';
import { ProfileService } from 'src/app/service/profile.service';
import { WardrobeService } from 'src/app/service/wardrobe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup
  UserName:string

  users:User[]
  constructor(private formBuilder: FormBuilder,
    private profileService:ProfileService,
    private wardrobeService:WardrobeService){}
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: new FormControl('', Validators.required)
    })
  }
  OnSubmit(){
    const value = this.searchForm.get('search').value
    this.fetchUsers(value)
    this.fetchWardrobe(value)
  }
  fetchUsers(value:string){
    this.UserName = value
     this.profileService.getUsersByUserName(this.UserName).subscribe({
      next: (users:User[]) => {
        this.users = users.filter( user =>{
          return user.userName!== JSON.parse(localStorage.getItem('user'))['userName']
        } )
      },
      error: (err) => {
        console.log(err)
      },
      complete:()=>{
        console.log('fetching completed')
        console.log(this.users)
      }
    })
  }
  fetchWardrobe(value:string){

    this.wardrobeService.getWardrobeByCode(value).subscribe()
  }
  fetchProducts(){

  }




}
