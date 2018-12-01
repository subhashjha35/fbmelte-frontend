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
    return this.http.get("http://18.222.30.236/backend/ingredients/");
  }
  constructor(private http:HttpClient) { }
}
