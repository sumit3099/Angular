import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    MatFormFieldModule
  ]

})
export class LoginComponent implements OnInit {


  constructor() {


  }

  ngOnInit() {

  }

  login(loginForm: NgForm){
    console.log(loginForm.value,loginForm.valid);
  }

}
