import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { User } from 'src/app/class/user';
import { Wardrobe } from 'src/app/class/wardrobe';
import { ProfileService } from 'src/app/service/profile.service';
import { WardrobeService } from 'src/app/service/wardrobe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: User
  followings: User[] = undefined
  followers: User[] = undefined
  ownUser: boolean = false
  userId: string = ''
  wardrobes: Wardrobe[]
  numFollowers: number = 0
  numFollowing: number = 0
  private currentId: string
  isfollowed: boolean = false


  constructor(private profileService: ProfileService,
    private _wardrobe: WardrobeService,
    private route: ActivatedRoute,

  ) { }
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.currentId = JSON.parse(localStorage.getItem('user'))['userId']

    //* calling some essential functions
    this.fetchUserInfo()
    this.fetchFollowings()
    this.fetchingFollowers()
    this.fetchingwardrobes()

  }
  // checking that is user already followered or not
  private followed() {
    const isPresent = this.followers.some(
      (user: User) =>
        user.userId == this.currentId
    )
    if (isPresent) {
      console.log('user is in follower list')
      this.isfollowed = true
    }


  }
  private checkProfile(userId: string, currentId: string): boolean {

    if (userId == currentId) {
      return true
    }
    return false
  }
  fetchUserInfo() {
    this.profileService.getuserInfo(this.userId).subscribe(
      {
        next: (user: User) => {
          this.profile = user
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log('fetching user info completed')
          let result = this.checkProfile(this.userId, this.currentId)
          if (result == true) {
            this.ownUser = true
          }
        }

      }
    )
  }
  fetchFollowings() {
    this.isfollowed = true
    this.profileService.getFollowingInfo(this.userId).subscribe({
      next: (data: any) => {
        this.followings = data
        console.log(this.followings)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.numFollowing = this.followings.length
        console.log('following info fetching completed')
      }
    })
  }
  fetchingFollowers() {
    this.isfollowed = false
    this.profileService.getFollowerInfo(this.userId).subscribe({
      next: (data: any) => {
        this.followers = data
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.numFollowers = this.followers.length
        this.followed()
        console.log('followers fetched successfully')

      }
    })
  }
  fetchingwardrobes() {
    this._wardrobe.getwarrobesByUserId(this.userId).subscribe(
      {
        next: (data: any) => {
          this.wardrobes = data
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          console.log(' wardrobe Fetching Completed')
        }
      }
    )
  }
  followUser(id: any) {
    console.log('following the user')
    this.profileService.follow(id, this.currentId).subscribe(
      {
        next: (data: any) => {
          console.log(' message recvied from follow request with success')
        },
        error: (error) => {
          console.log('error recieved in follow request')
        },
        complete: () => {
          console.log('followed completed')
          this.fetchUserInfo()
          this.fetchingFollowers()
        }
      }
    )
  }
  clear(table: Table) {
    table.clear();
  }
  unfollowUser(userId: string) {
    this.profileService.unfollow(userId, this.currentId).subscribe({
      next: (data: any) => {
        console.log('message received');
      },
      error: (error) => {
        console.log('error in unfollowing', error);
      },
      complete: () => {
        console.log('unfollow completed')
        this.fetchUserInfo()
        this.fetchingFollowers()
      }
    })
  }
}
