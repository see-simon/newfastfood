import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './models/users';

const apiUrl = 'http://localhost:3000/users'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

constructor( private http: HttpClient) { }

register(user :Users ){
  return this.http.post(apiUrl, user)

}

}
