import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/service/area.service';
import { SafePipe } from 'src/app/pipes/safe.pipe';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  AreaList= [
      {
        "strArea": "American",
        "strFlagImage": "assets/img/flags/flag-of-United-States-of-America.png"
      },
      {
        "strArea": "British",
        "strFlagImage": "assets/img/flags/flag-of-United-Kingdom.png"
      },
      {
        "strArea": "Canadian",
        "strFlagImage": "assets/img/flags/flag-of-Canada.png"
      },
      {
        "strArea": "Chinese",
        "strFlagImage": "assets/img/flags/flag-of-China.png"
      },
      {
        "strArea": "Dutch",
        "strFlagImage": "assets/img/flags/flag-of-Netherlands.png"
      },
      {
        "strArea": "French",
        "strFlagImage": "assets/img/flags/flag-of-France.png"
      },
      {
        "strArea": "Greek",
        "strFlagImage": "assets/img/flags/flag-of-Greece.png"
      },
      {
        "strArea": "Indian",
        "strFlagImage": "assets/img/flags/flag-of-India.png"
      },
      {
        "strArea": "Irish",
        "strFlagImage": "assets/img/flags/flag-of-Ireland.png"
      },
      {
        "strArea": "Italian",
        "strFlagImage": "assets/img/flags/flag-of-Italy.png"
      },
      {
        "strArea": "Jamaican",
        "strFlagImage": "assets/img/flags/flag-of-Jamaica.png"
      },
      {
        "strArea": "Japanese",
        "strFlagImage": "assets/img/flags/flag-of-Japan.png"
      },
      {
        "strArea": "Malaysian",
        "strFlagImage": "assets/img/flags/flag-of-Malaysia.png"
      },
      {
        "strArea": "Mexican",
        "strFlagImage": "assets/img/flags/flag-of-Mexico.png"
      },
      {
        "strArea": "Moroccan",
        "strFlagImage": "assets/img/flags/flag-of-Morocco.png"
      },
      {
        "strArea": "Russian",
        "strFlagImage": "assets/img/flags/flag-of-Russia.png"
      },
      {
        "strArea": "Spanish",
        "strFlagImage": "assets/img/flags/flag-of-Spain.png"
      },
      {
        "strArea": "Thai",
        "strFlagImage": "assets/img/flags/flag-of-Thailand.png"
      },
      {
        "strArea": "Unknown",
        "strFlagImage": "assets/img/flags/unknown.png"
      },
      {
        "strArea": "Vietnamese",
        "strFlagImage": "assets/img/flags/flag-of-Vietnam.png"
      }
    ];
  constructor(private areaService:AreaService) { }
  areaItems;
  ngOnInit() {
    this.areaItems=this.AreaList;
  }


}
