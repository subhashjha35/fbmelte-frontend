import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/service/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  public ingList;
  p: number = 1;
  constructor(private ingService:IngredientsService) { 
    this.ingService.get_ingredients().subscribe( data =>{
      this.ingList=data.data;
      console.log(this.ingList);
    });
  }
  ngOnInit() {
  }

}
