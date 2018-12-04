import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { RecipeService } from 'src/app/service/recipe.service';
import { CategoriesService } from 'src/app/service/categories.service';
import { UserService } from 'src/app/service/user.service';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { DialogService } from 'ng6-bootstrap-modal';
import { PopupComponent } from 'src/app/shared/popup/popup.component';

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
  latestRecipe;
  recommendedRecipe;
  recommendedRecipeItems;
  favouriteRecipeDetails;
  favouriteRecipe;
  favouriteItem;
  images = [''];
  userData;
  userId:string;
  constructor(private dialogService:DialogService,private userService:UserService, private recipeService:RecipeService, private catService:CategoriesService){
    this.recommendedRecipeItems=[];
    this.favouriteRecipeDetails=[];
    this.userId=localStorage.getItem('userId');
    if(this.userId){
      this.userService.getProfile(this.userId).subscribe(data=>{
        this.userData=data;
        this.userService.userName.next(data.data.name);
        console.log(this.userData);
        this.favouriteRecipe=this.userData.data.favorites;
        if(!this.userData.data.preferences.length){console.log(this.userData.data.preferences.length);this.showConfirm();}
        this.userData.data.preferences.forEach(e=>this.recommendedRecipeItems.push(e.meal_category_id));
        console.log(this.recommendedRecipeItems);
        this.get_recommendation();

        console.log(this.favouriteRecipe);
        console.log(this.userData.data);
        this.userData.data.favorites.forEach(element => {
          console.log(element.meal_id);
          this.recipeService.getRecipe(element.meal_id).subscribe(data=>{ 
            console.log(data);
            this.favouriteRecipeDetails.push(data.data);});
        });
        console.log(this.favouriteRecipeDetails);
      });
    }
    this.recipeService.getLatestReceipe().subscribe(data=>{
      this.latestRecipe=data.meals;
      console.log(this.latestRecipe);
    })
    
  }
  get_recommendation(){
    console.log(this.recommendedRecipeItems);
    this.catService.getCatDetails(this.recommendedRecipeItems[0]).subscribe(data=>{
      this.recommendedRecipe= data.meals;
      console.log(this.recommendedRecipe);
    })
  }

  showConfirm() {
    let disposable = this.dialogService.addDialog(PopupComponent, {
      title:'Confirm title', 
      message:'Confirm message'})
      .subscribe((isConfirmed)=>{
          //We get dialog result
          if(isConfirmed) {
            alert('accepted');
          }
          else {
            alert('declined');
          }
      });
  }
  ngOnInit(){
  }
}
