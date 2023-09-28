import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/ennvironment/environment';



@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiurl = environment.apiUrl

  constructor(private http: HttpClient) { }

  payment(data: any): Observable<any> {
    const paymentEndpoint = `${this.apiurl}/payment`;
    return this.http.post(paymentEndpoint, data ,{ responseType: 'json' });
  }
}
