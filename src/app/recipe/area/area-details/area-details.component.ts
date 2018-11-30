import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from 'src/app/service/area.service';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {
  public sub;
  private areaName:String;
  areaData;
  
  constructor(private route:ActivatedRoute, private areaService:AreaService) { }

  getAreaDetails(str){
    this.areaService.getAreaDetails(str).subscribe(data=>{
      this.areaData=data.meals;
      console.log(this.areaData);
    });
  }
  ngOnInit() {
    this.sub=this.route.params.subscribe(params =>{
      this.areaName= params['areaName'];
      this.getAreaDetails(this.areaName);
    }) 
  }

}
