import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    // Check if the token exists and is not expired
    const token = this.getToken();
    // Add logic to check token expiration here
    return !!token;
  }
  
}
