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
    return this.http.get('https://18.222.30.236/backend/meals/get_meal/'+id+'/');
  }
  getMealsByName(name):Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+name);
  }
  getMealsByPrice(min_price,max_price):Observable<any>{
    return this.http.get('https://18.222.30.236/backend/meals/search_meal/'+min_price+'/'+max_price+'/');
  }
  getLatestReceipe():Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/latest.php');
  }
  addToFavourite(idMeal,uid,token){
    uid=parseInt(uid);
    let data=
    {
      'auth':{
        'access_token':token,
        'id':uid
      },
      'meal_id':idMeal
    }
    console.log(data);
    return this.http.post("https://18.222.30.236/backend/users/add_favorites",JSON.stringify(data));
  }
}
