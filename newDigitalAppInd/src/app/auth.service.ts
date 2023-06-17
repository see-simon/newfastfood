import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './models/users';
import { Observable } from 'rxjs';
import { provideRouter } from '@angular/router';

const apiUrl = 'http://localhost:3000/users'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginapiUrl = 'http://localhost:3000/login'



  constructor(private http: HttpClient) { }


  register(user: Users) {
    return this.http.post(apiUrl, user)

  }



  loginUser(user: Users): Observable<any> {
    return this.http.post<any>(this.loginapiUrl, user)

  }
}