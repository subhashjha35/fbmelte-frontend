import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { RecipeService } from 'src/app/service/recipe.service';
import { CategoriesService } from 'src/app/service/categories.service';
import { UserService } from 'src/app/service/user.service';
import { SafePipe } from 'src/app/pipes/safe.pipe';

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
  // mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  // myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
  // mySlideOptions={items: 1, dots: true, nav: false};
  // myCarouselOptions={items: 3, dots: true, nav: true};

  images = [''];
  userData;
  userId:string;
  constructor(private userService:UserService){
    this.userId=localStorage.getItem('userId');
    if(this.userId){
      this.userService.getProfile(this.userId).subscribe(data=>{
        this.userData=data;
        console.log(this.userData);
      });
    }
  }
  ngOnInit(){

  }
}
