import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/service/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor(private areaService:AreaService) { }
  areaItems;
  getArea() {
    this.areaService.getAreas()
      .subscribe(data => {
        this.areaItems=data.meals;
        console.log(this.areaItems);
    });
  }
  ngOnInit() {
    this.getArea();
  }


}
