import { Component } from '@angular/core';
import { ToggleService } from 'src/app/service/toggle.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent {

  constructor(public toggle:ToggleService){}
}
