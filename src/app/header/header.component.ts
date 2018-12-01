import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean;
  constructor(private userService:UserService) { 
    this.userService.isLoggedIn().subscribe(val=>this.isLoggedIn=val);
    console.log(this.isLoggedIn);
  }
  private logout():void{
    this.userService.logout();
  }
  ngOnInit() {
  }

}
