import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  userName= new BehaviorSubject<string>(null);
  constructor(private http:HttpClient, private route:Router ) { 
  }
  
  isLoggedIn() : Observable<boolean> {
    console.log(this.isLoginSubject.asObservable());
    return this.isLoginSubject.asObservable();
  }
  hasToken():boolean{
    return !!localStorage.getItem('token');
  }
  registerUser(userData){
    return this.http.post("https://18.222.30.236/backend/users/register/", userData);
  }

  loginUser(userData):any{
    return this.http.post("https://18.222.30.236/backend/users/login/", userData);
  }

  getProfile(id):any{
    return this.http.get("https://18.222.30.236/backend/users/"+id+"/");
  }

  addPreference(data):any{
    return this.http.post("https://18.222.30.236/backend/users/add_preferences",data);
  }
  logout() : void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.isLoginSubject.next(false);
    this.userName.next(null);
    this.http.post("https://18.222.30.236/backend/users/logout/",{"access_token":localStorage.getItem('token')});
    this.route.navigate(['\login']);
  }
}
