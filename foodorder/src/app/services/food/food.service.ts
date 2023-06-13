import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  constructor() { }

  getAllById(id:number):Foods{
  return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
  return tag =='All'? this.getAll() :this.getAll().filter(food=>food.tags?.includes(tag));

  }
  getAllTag():Tag[]{
    return [
    {name:'All',count:8},
    {name:'FastFood',count:5},
    {name:'Pizza',count:2},
    {name:'Lunch',count:2},
    {name:'SlowFood',count:2},
    {name:'Burger',count:1},
    {name:'Fry',count:1},
    {name:'Soup',count:1},
  ]

  }

  getAll():Foods[]{
    return[
    {
      id:1,
      name:'american burger',
      cookTime:'10-20',
      price:10,
      favorite:true,
      origins:['america'],
      star:6,
      imageUrl:'../assets/food-1.JPG',
      tags:['FastFood','Burger'],
    },
    {
      id:2,
      name:'pizza papperoni',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['italy'],
      star:7,
      imageUrl:'../assets/food-2.JPG',
      tags:['FastFood','Pizza'],
    },
    {
      id:3,
      name:'manchurian ball',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['china'],
      star:4,
      imageUrl:'../assets/food-3.JPG',
      tags:['SlowFood','Fry'],
    },
    {
      id:4,
      name:'grill sandwich',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['united kingdom'],
      star:8,
      imageUrl:'../assets/food-4.JPG',
      tags:['FastFood'],
    },
    {
      id:5,
      name:'franch fries',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['america'],
      star:6,
      imageUrl:'../assets/food-5.JPG',
      tags:['FastFood','Lunch'],
    },
    {
      id:6,
      name:'pulav rice',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['india'],
      star:7,
      imageUrl:'../assets/food-6.JPG',
      tags:['Lunch','SlowFood'],
    },
    {
      id:7,
      name:'pizza paneer-tanduri',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['italy,india'],
      star:7,
      imageUrl:'../assets/food-7.JPG',
      tags:['FastFood','Pizza'],
    },
    {
      id:8,
      name:'vegitable soup',
      cookTime:'10-20',
      price:10,
      favorite:false,
      origins:['china,india'],
      star:8,
      imageUrl:'../assets/food-8.JPG',
      tags:['Soup'],
    },
    ]
  }
}

