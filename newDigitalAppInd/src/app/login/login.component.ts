
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formData: any = {}; // Object to store form data
  loginSuccess: boolean = false;
  loginError: string | null = null;

  constructor( private authService:AuthService ) { }

  
  onSubmit() {
    const { email, password } = this.formData;
    this.authService.loginUser(email, password).subscribe(
      (response) => {
        this.loginSuccess = true;
        this.loginError = null;
        // Handle successful login, e.g., redirect to the user dashboard
        console.log(this.formData,"fgcgvhvgvgvyvhv")
      },
      (error) => {
        this.loginSuccess = false;
        this.loginError = 'Login failed. Please check your credentials.';
      }
    );
    
  }
  



}
