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
      name:'Fashion',
      logo:'fa-solid fa-shirt'
    },
    {
      id:'',
      name:'Furniture',
      logo:'fa-solid fa-couch'
    },
    {
      id:'',
      name:'Sport',
      logo:'fa-solid fa-medal'
    },
    {
      id:'',
      name:'Toy',
      logo:'fa-solid fa-bicycle'
    },
    {
      id:'',
      name:'Game',
      logo:'fa-solid fa-gamepad'
    },
    {
      id:'',
      name:'Phone',
      logo:'fa-solid fa-mobile'
    },
    {
      id:'',
      name:'Camera',
      logo:'fa-solid fa-camera'
    },
  ]
}
