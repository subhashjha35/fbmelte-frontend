import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

export interface User{
  name:string;
  email:string;
  password:string;
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
  userData:User={name:null,email:null,password:null};
  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

  get f() { return this.registerForm.controls; }
  data(){
    this.formArray =this.registerForm.controls;
    console.log(this.formArray);
    Object.keys(this.formArray).forEach(key => {
      // console.log(this.userData);
      this.userData[key] = this.formArray[key].value;
    });
    console.log(this.userData);
  }  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.data();
    this.userService.registerUser(this.userData).subscribe(data => {
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
