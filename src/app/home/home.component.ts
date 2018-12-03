import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  strSearch;
  constructor(private route:Router) { }
  goToSearch(){
    console.log("gotosearch called");
    this.route.navigateByUrl('/search/'+this.strSearch);
  }
  ngOnInit() {
    console.log("initialized")
  }

}
