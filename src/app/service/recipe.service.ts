import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  randomMeal: any;
  constructor(private http:HttpClient) {
  }

  getRandomRecipe(): Observable<any> {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/random.php');
  }
  getRecipe(id): Observable<any> {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
  }

  getLatestReceipe():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/latest.php');
  }
}
