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
      categoryId:'',
      name:'Men',
    },
    {
      categoryId:'',
      name:'Women',

    },
    {
      categoryId:'',
      name:'Child',

    },
    {
      categoryId:'',
      name:'Teenager',

    }
  ]
}
