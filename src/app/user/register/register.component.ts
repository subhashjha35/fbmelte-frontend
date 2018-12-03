import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

export interface User{
  name:string;
  email:string;
  password:string;
  date_of_birth:string;
  nationality:string;
  surname:string;
  gender:number;
  profile_img:string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  error;
  success;
  formArray;
  userCols;
  userData:User;
  userDataString;
  constructor(private formBuilder:FormBuilder, private userService:UserService) { 
    this.userData={
      name:"",
      nationality:"",
      surname:"",
      profile_img:"",
      email:"",
      password:"",
      date_of_birth:"",
      gender:0,
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      date_of_birth: ['', [Validators.required]],
      gender: ['', [Validators.required,]]
  });
}

  get f() { return this.registerForm.controls; }
  data(){
    this.formArray =this.registerForm.controls;
    console.log(this.formArray);
    Object.keys(this.formArray).forEach(key => {
      
      this.userData[key] = this.formArray[key].value;
    });
    this.userData.surname="not provided";
    this.userData.nationality="not provided";
    this.userData.profile_img="not provided";
    console.log(this.userData);
    this.userDataString=JSON.stringify(this.userData);
    console.log(this.userDataString);
  }  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.data();
    this.userService.registerUser(this.userDataString).subscribe(data => {
      console.log("Request completed");
      this.success="Registered Successfully!!!";
      this.error=null;
    },
    error => {
      this.success=null;
      this.error=error.error['error'];
      // console.log(error.error);
    });
  }
}
