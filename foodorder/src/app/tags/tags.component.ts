import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  @Input()
  foodpagetags?:string[];
  tags?:Tag[]=[]
  constructor(private fs:FoodService){}
  ngOnInit(): void {
    if(!this.foodpagetags)
   this.tags=this.fs.getAllTag()
  }

}
