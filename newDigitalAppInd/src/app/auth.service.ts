import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users'

constructor( private http: HttpClient) { }

register(user :Users ){
  return this.http.post(this.apiUrl, user)

}

}
