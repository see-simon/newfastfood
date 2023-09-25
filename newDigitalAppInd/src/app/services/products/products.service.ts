import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/ennvironment/environment';

const apiurl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 

  constructor(private http: HttpClient) { }

  getBreakefast(): Observable<any> {
    return this.http.get(apiurl + '/breakefast', { responseType: 'json' });
  }
}
