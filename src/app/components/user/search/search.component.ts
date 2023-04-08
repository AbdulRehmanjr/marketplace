import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/class/user';
import { ProfileService } from 'src/app/service/profile.service';

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
    private profileService:ProfileService){}
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      userName: new FormControl('', Validators.required)
    })
  }
  OnSubmit(){
     this.UserName = this.searchForm.get('userName').value
     console.log(this.UserName)
     this.profileService.getUsersByUserName(this.UserName).subscribe({
      next: (users:User[]) => {
        this.users = users.filter( user =>{
          return user.userName!== JSON.parse(sessionStorage.getItem('user'))['userName']
        } )
      },
      error: (err) => {
        console.log(err)
      },
      complete:()=>{
        console.log('fetching completed')
      }
    })
  }





}
