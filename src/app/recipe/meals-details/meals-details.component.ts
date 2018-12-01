import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-meals-details',
  templateUrl: './meals-details.component.html',
  styleUrls: ['./meals-details.component.css']
})
export class MealsDetailsComponent implements OnInit {
  mealId:number;
  meal:{};
  constructor(private route:ActivatedRoute, private recipe:RecipeService) { }
  getMealDetails(mealId){
    this.recipe.getRecipe(mealId).subscribe(data => {
      this.meal=data.meals;
      console.log(this.meal);
  });
  }
  addToFavourite(idMeal){
    let uid:string=localStorage.getItem('userId');
    let token:string=localStorage.getItem('token');
    console.log(uid+" "+token);
    this.recipe.addToFavourite(idMeal,uid,token).subscribe(data=>{
      console.log(data);
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.mealId=params["id"];
    });
    this.getMealDetails(this.mealId);
  }

}
