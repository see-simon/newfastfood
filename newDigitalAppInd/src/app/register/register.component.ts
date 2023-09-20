import { Component, OnInit } from '@angular/core';
//
import { AuthService } from '../services/auth/auth.service';
//
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Users } from '../models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formData: any = {}; // Object to store form data
  registrationSuccess: boolean = false;
  registrationError: string | null = null;
  constructor(private authService: AuthService) {}

  // registerUser(firstname: string, lastname: string, email: string, password :string ) {
  onSubmit() {
    const { firstname, lastname, email, password } = this.formData;

    this.authService.registerUser(firstname, lastname, email, password).subscribe(
        (response) => {
          // Handle successful registration, e.g., redirect to login page
          console.log(response);
          console.log('successfully registered');
          this.registrationSuccess = true;
          this.registrationError = null;
          
          
        },
        (error) => {
          // Handle registration error, e.g., display an error message
          console.log(error);
          this.registrationSuccess = false;
          this.registrationError =
            'Registration failed. Please try again later.';
        }
      );
      console.log(this.formData)
  }
}
