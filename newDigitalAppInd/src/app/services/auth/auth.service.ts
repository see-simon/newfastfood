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



    registerUser(firstname: string, lastname: string, email: string, password :string ): Observable<any> {
      const userData = { firstname, lastname , email, password };
      return this.http.post(`${apiUrl}/users`, userData);
    }

    logIn(credentials: { email: string, password: string }): Observable<any> {
      return this.http.post(`${apiUrl}users/login`, credentials).pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle the error here or rethrow it to be caught by the component.
          return throwError(error.error.message);
        })
      );
    }


    logout(): Observable<any> {
      return this.http.post(apiUrl + 'signout', {}, httpOptions);
    }


}
