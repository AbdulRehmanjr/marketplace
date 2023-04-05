import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/class/user';
import { Wardrobe } from 'src/app/class/wardrobe';

@Component({
  selector: 'app-add-wardrobe',
  templateUrl: './add-wardrobe.component.html',
  styleUrls: ['./add-wardrobe.component.css']
})
export class AddWardrobeComponent implements OnInit{

  wardrobeForm:FormGroup
  constructor(private _form:FormBuilder){

  }

  ngOnInit(): void {
    this.wardrobeForm = this._form.group({
      title: new FormControl('', [Validators.required,Validators.email]),
      description: new FormControl('', [Validators.required]),
    });
  }

  get title():any {

    return this.wardrobeForm.get('title').value
  }
  get description():any{
    return this.wardrobeForm.get('description').value
  }
  OnSubmit():void{

   let wardrobe = new Wardrobe()
   wardrobe.title = this.title()
   wardrobe.decription = this.title()

   let user = new User()
   user.id = '6b0d00c4-62cb-47eb-a095-b563ee72fbab'

   wardrobe.user = user

   console.log('wardrobe',wardrobe)
  }
}
