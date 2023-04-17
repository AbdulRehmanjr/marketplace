import {  Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Wardrobe } from 'src/app/class/wardrobe';
import { WardrobeService } from 'src/app/service/wardrobe.service';

@Component({
  selector: 'app-list-wardrobe',
  templateUrl: './list-wardrobe.component.html',
  styleUrls: ['./list-wardrobe.component.css']
})
export class ListWardrobeComponent implements OnInit{


  wardrobes:Wardrobe[]
  displayDialog:boolean = false
  private userId:string

  @Input()
  actionForm :boolean

  constructor(private _wardrobeService:WardrobeService){}
  ngOnInit(): void {
   // @TODO : add usr Id in this function later
    this.userId = JSON.parse(localStorage.getItem('user'))['userId']
    this.fetchWardrobeList()
  }
  fetchWardrobeList(){
    this._wardrobeService.getwarrobesByUserId(this.userId).subscribe({
      next:(data:any)=>{
        this.wardrobes = data
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log('completed')
      }

    })
  }
  onSubmit(event:any){

    console.log(event.target['value'])
  }
  hideDialog() {
    this.displayDialog =false
    this.fetchWardrobeList()
    }
    showDialog() {
      this.displayDialog = true
    }
}
