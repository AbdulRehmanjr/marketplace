import { Component } from '@angular/core';

@Component({
  selector: 'app-list-wardrobe',
  templateUrl: './list-wardrobe.component.html',
  styleUrls: ['./list-wardrobe.component.css']
})
export class ListWardrobeComponent {

  numbers:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  displayDialog:boolean = false
  hideDialog() {
    this.displayDialog =false
    }
    showDialog() {
      this.displayDialog = true
    }
}
