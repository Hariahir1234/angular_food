import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  foods:Foods[]= [];
  
  constructor(private fs:FoodService,private route:ActivatedRoute){ }

  ngOnInit(): void {
  this.route.params.subscribe(params=>{
    if(params['searchItem'])
    this.foods=this.fs.getAll().filter(foods=>foods.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
    else if(params['tag'])
    this.foods=this.fs.getAllFoodByTag(params['tag']) 
    else
    this.foods=this.fs.getAll();


  
  })
  
  }

}
