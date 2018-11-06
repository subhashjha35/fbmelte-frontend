import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  randomMeal: any;
  constructor(private http:HttpClient) {
  }

  getCategories() {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  }
  getCatDetails(str){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+str);
  }
}
