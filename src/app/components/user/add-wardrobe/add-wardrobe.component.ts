import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/class/user';
import { Wardrobe } from 'src/app/class/wardrobe';
import { WardrobeService } from 'src/app/service/wardrobe.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-wardrobe',
  templateUrl: './add-wardrobe.component.html',
  styleUrls: ['./add-wardrobe.component.css']
})
export class AddWardrobeComponent implements OnInit{

  wardrobeForm:FormGroup

  @Output()
  formSubmited = new EventEmitter<boolean>()


  constructor(private _form:FormBuilder,
    private _wardrobeService:WardrobeService){

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
   wardrobe.title = this.title
   wardrobe.description = this.description

   let user = new User()
   user.userId = JSON.parse(sessionStorage.getItem('user'))['userId']

   wardrobe.user = user

   console.log('wardrobe',wardrobe)

   this._wardrobeService.saveWardrobe(wardrobe).subscribe({
    next:(data:any)=>{
      Swal.fire('Success','Added succesfully','success')
    },
    error:(err:any)=>{
      console.log(err)
    },
    complete:()=>{
      console.log('Adding wardrobe completed')
      this.formSubmited.emit(true)
    }
   })
  }
}
