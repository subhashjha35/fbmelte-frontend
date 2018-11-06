import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  private sub: any;
  private catName:String;
  catData;
  constructor(private route:ActivatedRoute, private catService:CategoriesService) { }

  getCatDetails(str){
    this.catService.getCatDetails(str).subscribe(data=>{
      this.catData=data.meals;
      console.log(this.catData);
    });
  }
  ngOnInit() {
    this.sub=this.route.params.subscribe(params =>{
      this.catName= params['catName'];
      this.getCatDetails(this.catName);
    }) 
  }

}
