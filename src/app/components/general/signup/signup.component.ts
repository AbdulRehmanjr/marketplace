import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

SignupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _router:Router,
    private signup:SignupService  ) { }
  ngOnInit(): void {

    this.SignupForm = this.formBuilder.group({
      password: new FormControl('', [Validators.required]),
      email :new FormControl('',[Validators.required,Validators.email]),
    });
  }
  get email():any {return this.SignupForm.get('email').value}
  get password(): any { return this.SignupForm.get('password').value }
  OnSubmit() {
     let user = new User()
     user.email = this.SignupForm.controls['email'].value
     user.password = this.SignupForm.controls['password'].value

     this.signup.signup(user)
    }
}
