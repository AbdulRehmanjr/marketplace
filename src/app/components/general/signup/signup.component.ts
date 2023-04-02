import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { SignupService } from 'src/app/service/signup.service';

import swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

SignupForm: FormGroup;
file:File
Error:string
  constructor(
    private formBuilder: FormBuilder,
    private _router:Router,
    private _signup:SignupService  ) { }
  ngOnInit(): void {
    this.SignupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
          username: ['', Validators.required],
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
          profilePicture: ['', Validators.required],
    });
  }

  passwordMatchValidator(form: FormGroup):void {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
  }

  onChange(event:any){
    this.file= event.target.files[0]
    if(this.file){
      console.log("File changed / selected")
    }
  }
  OnSubmit() {
    if (this.SignupForm.invalid) {
      this.SignupForm.markAllAsTouched();
      return;
    }
     let user = new User()
     user.email = this.SignupForm.controls['email'].value
     user.userPassword = this.SignupForm.controls['password'].value
     user.userName = this.SignupForm.controls['username'].value

     this._signup.saveUser(user,this.file).subscribe({
      next:(value:any)=>{
        if(value){
          this._router.navigate(['login'])
        }
      },
      error:(err:Error)=>{
        console.log(`Error in saving user ${err}`)
        swal.fire(
          'Sign up Failed',
          `${err.message}`,
          'error'
        );
      },
      complete:()=>{
        console.log('Saving user completed with success')
      }
     })
    }
}
