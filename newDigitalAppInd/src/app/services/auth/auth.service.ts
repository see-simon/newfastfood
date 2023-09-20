import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { environment } from 'src/ennvironment/environment';

const apiUrl = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }


// for registration

    registerUser(firstname: string, lastname: string, email: string, password :string ): Observable<any> {
      const userData = { firstname, lastname , email, password };
      return this.http.post(`${apiUrl}/users/register`, userData);
    }


// for login

    loginUser(email: string, password: string): Observable<any> {
      const userData = { email, password };
      return this.http.post(`${apiUrl}/users/login`, userData);
    }


    logout(): Observable<any> {
      return this.http.post(apiUrl + 'signout', {}, httpOptions);
    }


}
