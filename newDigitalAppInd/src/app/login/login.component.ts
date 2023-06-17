import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Users } from '../models/users';


//const apiUrl = 'http://localhost:3000/users'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  users!: Users;

  constructor(private authService: AuthService) { }

  ngOnInit(){

  }
  
  loginUser(){
    this.authService.loginUser(this.users)
    .subscribe(
      res =>console.log(res),
      err =>console.log(err)
    )
  }



}
