import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ingModel
{
  meals:any[]
}
@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  get_ingredients():any{
    return this.http.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
  }
  constructor(private http:HttpClient) { }
}
