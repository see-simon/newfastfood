
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service'; 
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formData: any = {}; // Object to store form data
  loginSuccess: boolean = false;
  loginError: string | null = null;

  constructor( private products: ProductsService,private authService:AuthService, private tokenStorage: TokenStorageService , public router: Router) { }

  
  onSubmit() {
    
    const { email, password } = this.formData;
    this.authService.loginUser(email, password).subscribe(
      (response) => {
        this.loginSuccess = true;
        this.loginError = null;
        // Handle successful login, e.g., redirect to the user dashboard
        console.log(this.formData,"fgcgvhvgvgvyvhv")
         // Store the token securely (e.g., in local storage)
         localStorage.setItem('token', response.token);
         alert("login success")
         this.router.navigate(['/trackorder']);
         this.tokenStorage.saveToken(response.data)
         
      },
      (error) => {
        this.loginSuccess = false;
        this.loginError = 'Login failed. Please check your credentials.';
        // alert("Login failed. Please check your credentials")
      }
    );

    
  }

  product : any;
  // getBreakefastProduct (){
  //   this.products.getBreakefast().subscribe(
  //     response=>{
  //       this.product = response
  //       console.log(this.product," bhuhwsdnjnc cdbbjdnc")
  //   },
  //   (error)=>{
  //     console.error('Error fetching items from the API:', error);
  //   })
  // }
  

  



}
