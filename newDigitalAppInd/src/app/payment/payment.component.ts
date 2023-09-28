
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../services/payment/payment.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  totalCartPrice: number = 0; // Define totalCartPrice property

  paymentData: any = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  };

  constructor(private route: ActivatedRoute, private pay: PaymentService) { }

  ngOnInit() {
    // Retrieve the totalCartPrice from route parameters
    this.route.params.subscribe((params) => {
      this.totalCartPrice = +params['totalCartPrice']; // Use + to convert it to a number

      console.log(this.totalCartPrice, "   payment");

    });
  }

  processPayment() {
    console.log('Payment data:', this.paymentData);
   
    this.pay.payment(this.paymentData).subscribe(
      (response) => {
        console.log('Payment successful', response);
        console.log(this.paymentData)
      },
      (error) => {
        console.error('Payment error', error);
      }
    )
  }
}
