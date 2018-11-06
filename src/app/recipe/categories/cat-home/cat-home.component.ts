import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-cat-home',
  templateUrl: './cat-home.component.html',
  styleUrls: ['./cat-home.component.css']
})
export class CatHomeComponent implements OnInit {

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
