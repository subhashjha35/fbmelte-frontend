import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData;
  userName;
  userId;
  isLoggedIn:boolean;
  constructor(private userService:UserService) { 
    this.userService.isLoggedIn().subscribe(val=>this.isLoggedIn=val);
    console.log(this.isLoggedIn);
  }
  private logout():void{
    this.userService.logout();
  }
  ngOnInit() {
    this.userId=localStorage.getItem('userId');
    if(this.userId){
      this.userService.getProfile(this.userId).subscribe(data=>{
        this.userData=data;
        console.log(this.userData);
        this.userService.userName.next(this.userData.data.name);
        this.userService.userName.subscribe(name => this.userName=name);
        console.log(this.userName);
      });
    }
  }

}
