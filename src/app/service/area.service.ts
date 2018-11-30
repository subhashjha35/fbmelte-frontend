import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http:HttpClient) { }
  getAreas():any{
    return this.http.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
  }
  getAreaDetails(cat):any{
    return this.http.get("https://www.themealdb.com/api/json/v1/1/filter.php?a="+cat);
  }
}
