import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  public meal;
  constructor(private recipeService:RecipeService) {
    
  }
  getMeals() {
    this.recipeService.getRandomRecipe()
      .subscribe(data => {
        this.meal=data.meals;
        console.log(this.meal);
    });
  }
  ngOnInit() {
    this.getMeals();
  }
}
