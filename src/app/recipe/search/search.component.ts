import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr;
  searchResult;
  searchResultCount;
  constructor(private route:ActivatedRoute, private recipeService:RecipeService) { }
  searchMeal(){
    this.recipeService.getMealsByName(this.searchStr).subscribe(data =>{
      this.searchResult=data.meals;
      this.searchResultCount=this.searchResult.length;
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.searchStr=params["name"];
    });
    this.searchMeal();
  }

}
