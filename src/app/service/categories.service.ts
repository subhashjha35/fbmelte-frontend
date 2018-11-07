import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
interface CatType{
  categories:any[];
}
interface CatDetailsType{
  meals:any[];
}
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  randomMeal: any;
  constructor(private http:HttpClient) {
  }

  getCategories() {
    return this.http.get<CatType>('https://www.themealdb.com/api/json/v1/1/categories.php');
  }
  getCatDetails(str){
    return this.http.get<CatDetailsType>('https://www.themealdb.com/api/json/v1/1/filter.php?c='+str);
  }
}
