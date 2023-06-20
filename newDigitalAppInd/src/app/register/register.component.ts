import { Component, OnInit } from '@angular/core';
//
import { AuthService } from '../auth.service';
//
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  



  users!: Users;
  
  constructor(private userService: AuthService,private fb : FormBuilder) {
    this.registerForm =this.fb.group({
      firstname: ['',[Validators.required, Validators.min(3)]],
      lastname: ['',[Validators.required, Validators.min(3)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.min(8)]]
    })
  }

  // this.passwordValidator
  ngOnInit() {
  
  }

  passwordValidator(control: FormControl): { [key: string]: boolean } | null {
         const value: string = control.value;     
         const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);     
         const hasNumber = /\d/.test(value);     
         const hasLetter = /[a-zA-Z]/.test(value);        
         if (!hasSymbol || !hasNumber || !hasLetter) {
                 return { invalidPassword: true };    
         }       
           return null;  
  }


    

  onregister(){

    if(this.registerForm.valid){
        this.userService.register(this.registerForm.value).subscribe(res =>{
         // this.users = res
         console.log(res);
         
         
        })
    }
  }
  
  ///for login

 
  

}
