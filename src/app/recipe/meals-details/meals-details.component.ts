import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
import { DialogService } from 'ng6-bootstrap-modal';

@Component({
  selector: 'app-meals-details',
  templateUrl: './meals-details.component.html',
  styleUrls: ['./meals-details.component.css']
})
export class MealsDetailsComponent implements OnInit {
  mealId:number;
  meal;
  route_url;
  constructor(private curRoute:Router,private dialogService:DialogService,private route:ActivatedRoute, private recipe:RecipeService) { this.meal=[]; }
  getMealDetails(mealId){
    this.recipe.getRecipe(mealId).subscribe(data => {
      this.meal=data.data;
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

  showIngredientDetails(){
    let disposable = this.dialogService.addDialog(PopupComponent, {
      title:'Confirm title', 
      message:'Confirm message'})
      .subscribe((isConfirmed)=>{
          if(isConfirmed) {
            alert('accepted');
          }
          else {
            alert('declined');
          }
      });
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.mealId=params["id"];
    });
    this.getMealDetails(this.mealId);
    this.route_url=this.curRoute.url;
  }

}
