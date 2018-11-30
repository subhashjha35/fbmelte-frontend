import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { RecipeService } from 'src/app/service/recipe.service';
import { CategoriesService } from 'src/app/service/categories.service';

interface sliderModel{
  name:string;
  mealsList:any[];
}
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  public sliderItemList:sliderModel[];
  latestRecipeList:any[];
  recommendedRecipeList: any[];
  public carouselTileItems: Array<any> = [0,1];
  public carouselTiles = {
    0: [],
    1: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 2, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: false
    },
    load: 3,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
  };
  
  constructor(private recipeService:RecipeService, private catService:CategoriesService) { 
    // this.latestRecipeList=[];
    this.sliderItemList=[];
    this.get_latest_meals();
    this.get_recommended_meals();
    
  }

  ngOnInit() {
    
    
  }

  public carouselTileLoad(j) {
    console.log(this.sliderItemList[j].mealsList);
    for(var i=0;i<this.sliderItemList[j].mealsList.length;i++){
      this.carouselTiles[j].push(this.sliderItemList[j].mealsList)
    }
  }

  public get_latest_meals(){
    this.recipeService.getLatestReceipe().subscribe(data => {
      this.latestRecipeList=data.meals;
      this.sliderItemList.push({name:"Latest Meals", mealsList:this.latestRecipeList});
      this.carouselTileLoad(0);
      console.log(this.latestRecipeList);
    })
  }

  public get_recommended_meals(){
    this.catService.getCatDetails('Beef').subscribe( data =>{
      this.recommendedRecipeList=data.meals;
      console.log(this.recommendedRecipeList);
      this.sliderItemList.push({name:"Recommended Meals", mealsList:this.recommendedRecipeList});
      console.log(this.sliderItemList);
      this.carouselTileLoad(1);
      
    });
  }
  ngAfterViewInit(): void {
    
  }
}
