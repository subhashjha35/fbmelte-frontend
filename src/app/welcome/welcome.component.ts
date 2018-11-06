import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../service/categories.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
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
