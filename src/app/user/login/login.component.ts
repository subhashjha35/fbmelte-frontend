import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
export interface User{
  email:string;
  password:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted=false;
  formArray;
  userCols;
  userData:User={email:null,password:null};
  error;
  success;
  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }
  data(){
    this.formArray =this.loginForm.controls;
    console.log(this.formArray);
    Object.keys(this.formArray).forEach(key => {
      this.userData[key] = this.formArray[key].value;
    });
    console.log(this.userData);
  }  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.data();
    this.userService.loginUser(this.userData).subscribe(data => {
      if(data['success']==true){
        this.success="User Logged In";
      }
      console.log(data);
    },
    error => {
      this.error=error.error['error'];
      // console.log(error.error);
    });
  }
}