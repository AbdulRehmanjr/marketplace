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
    },
    {
      id:'',
      name:'Women',

    },
    {
      id:'',
      name:'Child',

    },
    {
      id:'',
      name:'Teenager',

    }
  ]
}
