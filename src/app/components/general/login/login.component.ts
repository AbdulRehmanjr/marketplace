import { Component, OnInit } from '@angular/core';

import { SocialAuthService,SocialUser,GoogleLoginProvider  } from "@abacritt/angularx-social-login";

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/class/login';
import { LoginService } from 'src/app/service/login.service';
import swal from 'sweetalert2'
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  LoginForm: FormGroup;
  private accessToken = '';

  constructor(private authService: SocialAuthService
    , private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService:LoginService
    ) { }

    //  CurrentUser:any;


    ngOnInit(): void {
      this.LoginForm = this.formBuilder.group({
        email: new FormControl('', [Validators.required,Validators.email]),
        password: new FormControl('', [Validators.required]),
      });
    }

  signInWithGoogle():void{
    this.authService.authState.subscribe((user) => {

      this.user = user
      this.loggedIn = (user != null)
      console.log('logged in ',this.loggedIn)
      if (this.loggedIn ==true){
        this.router.navigate([''])
      }
    });
  }

  getAccessToken(): void {
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
  }

  getGoogleCalendarData(): void {
    if (!this.accessToken) return;

    this.httpClient
      .get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        headers: { Authorization: `Bearer ${this.accessToken}` },
      })
      .subscribe((events) => {
        alert('Look at your console');
        console.log('events', events);
      });
  }


  get email(): any { return this.LoginForm.get('email').value; }
  get password(): any { return this.LoginForm.get('password').value; }

  // form submission
  OnSubmit() {

    if (this.LoginForm.invalid) {
      this.LoginForm.markAllAsTouched();
      return;
    }

    let login = new Login();

    login.email = this.LoginForm.controls['email'].value;
    login.password = this.LoginForm.controls['password'].value;

    // checking blank
    if (login.email.trim() == "") {

      swal.fire(
        'Error',
        'Email cannot be blank',
        'error'
      );
      return
    }

    this.loginService.generateToken(login).subscribe({
      next:(data:any)=>{
        console.log('token',data.token)
        this.loginService.setToken(data.token)

        this.loginService.currentUser(login).subscribe(
          {
            next:(data:any)=>{
              console.log("Data from request",data)
              this.loginService.setUser(data)

            }
            ,error(err) {
                console.log(err)
            },
            complete:() =>{
                console.log('completed seting user')
                this.redirection()
            },
          }

         )
      },
      error:(err)=>{
        console.log(err)
        swal.fire(
          'Login Failed',
          'Please enter valid Email and Password',
          'error'
        );
      },
      complete:()=>{
        console.log(`completted token generation`)
      }
    })
  }

    private redirection():void {

    const role =  this.loginService.getAuthority()

    if( role== "ADMIN"){

      this.router.navigate(['admin-dashboard'])

    }else if(role == "USER"){
      let user = JSON.parse(sessionStorage.getItem('user'))
      this.router.navigate([`user-dashboard/profile/${user['userId']}`])
    }
    else{
      this.router.navigate(['login'])
    }
  }

}
