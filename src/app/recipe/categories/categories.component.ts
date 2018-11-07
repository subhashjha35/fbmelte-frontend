import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public catItems;
  constructor(private catService:CategoriesService) { }
  getCat() {
    this.catService.getCategories()
      .subscribe(data => {
        this.catItems=data.categories;
        console.log(this.catItems);
    });
  }
  ngOnInit() {
    this.getCat();
  }

}
