import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
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
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    }); 
    let options = {
      headers: httpHeaders
    };
    return this.http.post("https://18.222.30.236/backend/users/register/", userData, options);
  }

  loginUser(userData):any{
    return this.http.post("https://18.222.30.236/backend/users/login/", userData);
  }

  getProfile(id){
    return this.http.get("https://18.222.30.236/backend/users/"+id+"/");
  }
  logout() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
    this.http.post("https://18.222.30.236/backend/users/logout/",{"access_token":localStorage.getItem('token')});
    this.route.navigate(['\login']);
  }
}
