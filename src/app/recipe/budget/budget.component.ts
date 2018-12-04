import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  foodArr;
  minValue;
  maxValue;
  p: number = 1;
  constructor(private recipeService:RecipeService) { }
  searchFood(){
    this.foodArr=[];
    this.recipeService.getMealsByPrice(this.minValue,this.maxValue).subscribe(data=>{
      this.foodArr=data.data;
      console.log(this.foodArr);
    });
  }
  ngOnInit() {
  }

}
