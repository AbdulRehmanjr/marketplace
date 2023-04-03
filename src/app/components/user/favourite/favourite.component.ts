import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  customers: Customer[] = [
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },

    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },

    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },

    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
    {
      id:'1',
      name:'Abdul rehman',
      image:'assets/images/team/team_member_1.jpg'
    },
  ]

    selectedCustomers: Customer;

    constructor() {}

    ngOnInit() {

    }

    getSeverity(status: any):any {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
}
}
interface Customer{
  name:string
  image:string,
  id:string
}
