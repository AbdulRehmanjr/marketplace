import { Component, OnInit } from '@angular/core';
import { connect } from 'rxjs';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent  implements OnInit{
  ngOnInit(): void {
    console.log('general component init')
  }

}
