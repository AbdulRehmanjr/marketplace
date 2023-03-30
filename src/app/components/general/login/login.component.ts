import { Component, OnInit } from '@angular/core';

import { SocialAuthService,SocialUser,GoogleLoginProvider  } from "@abacritt/angularx-social-login";

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  private accessToken = '';

  constructor(private authService: SocialAuthService
    , private httpClient: HttpClient,
    private router:Router
    ) { }

  ngOnInit() {

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
}
