import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
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
  constructor(private formBuilder:FormBuilder, private userService:UserService, private route:Router) { }

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
    console.log(this.userData);
    this.userService.loginUser(JSON.stringify(this.userData)).subscribe(data => {
      if(data['success']==true){
        this.success="User Logged In";
        localStorage.setItem('token', data.data.access_token);
        localStorage.setItem('userId', data.data.id);
        this.userService.isLoginSubject.next(true);
        this.route.navigate(['/profile']);
        this.error=null;
      }
      console.log(data);
    },
    error => {
      this.error=error.error['error'];
      this.success=null;
      // console.log(error.error);
    });
  }
}