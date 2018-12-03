import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng6-bootstrap-modal';
import { CategoriesService } from 'src/app/service/categories.service';
import { UserService } from 'src/app/service/user.service';

export interface PopUpModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent extends DialogComponent<PopUpModel, boolean> implements PopUpModel {
  title: string;
  message: string;
  catData;
  catName;
  prefData;
  constructor(dialogService: DialogService, private catService:CategoriesService, private userService:UserService) {
    super(dialogService);
    this.catName="Chicken";
    catService.getCategories().subscribe(data=>{this.catData=data.categories; console.log(data);});
  }
  confirm() {
    
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code
    
    this.prefData={
      auth:{
        'access_token':localStorage.getItem('token'),
        'id':parseInt(localStorage.getItem('userId'))
      },
      'meal_category_id': this.catName
    }
    this.userService.addPreference(JSON.stringify(this.prefData)).subscribe(data=>console.log(data));
    this.result = true;
    this.close();
  }

}
