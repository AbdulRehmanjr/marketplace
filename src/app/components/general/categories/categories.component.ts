import { Component } from '@angular/core';
import { Category } from 'src/app/class/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories:Category[] = [
    {
      id:'',
      name:'Men',
      logo:'fa-solid fa-person'
    },
    {
      id:'',
      name:'Women',
      logo:'fa-solid fa-person-dress'
    },
    {
      id:'',
      name:'Child',
      logo:'fa-solid fa-baby'
    },
    {
      id:'',
      name:'Teenager',
      logo:'fa-solid fa-user-graduate'
    }
  ]
}
