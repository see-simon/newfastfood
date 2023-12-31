import { Component, computed, signal } from '@angular/core';
// import { BreakefastService } from '../services/breakefast.service';

import { ActivatedRoute, Router } from '@angular/router';
import { BreakefastService } from '../services/breakefast.service';
import { Breakefast } from '../models/breakefast';
import { Route } from '@angular/router';
import { ProductsService } from '../services/products/products.service';


import { CartService } from '../services/cart.service'; // Import CartService
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.scss'],
  template: ` <button (click)="sendData()" >Make Order</button> `
})
export class TrackorderComponent {

 
// Inject Services

  constructor( private router: Router, private getBreakefast : BreakefastService,
     private products: ProductsService ,   public cartService: CartService ){
          // Subscribe to the totalCartPrice$ observable
        this.cartSubscription = this.cartService.totalCartPrice$.subscribe((totalPrice) => {
          this.totalCartPrice = totalPrice;
        });
     }
  product : any;
  totalCartPrice: number = 0;
  private cartSubscription: Subscription; // Create a Subscription

  fetchProduct (){
    this.products.getBreakefast().subscribe({
      next:data=>{
        // console.log(data)
        this.product = data;
        console.log(this.product, " products are here")
      }
      ,error:err=>{
        console.log(err)

      }
    })
  }


  ngOnInit() {
    this.fetchProduct()
    this.updateTotalCartPrice();
  
  }

  ngOnDestroy() {
    // Unsubscribe from the cartSubscription to avoid memory leaks
    this.cartSubscription.unsubscribe();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Product added to cart'); // Show an alert or notification
  }

  updateTotalCartPrice() {
    this.totalCartPrice = this.cartService.calculateTotalPrice();
  }

  removeItemFromCart(index: number) {
    this.cartService.removeItemFromCart(index);
    this.updateTotalCartPrice();
  }

  goToPayment() {
    const totalCartPrice = this.totalCartPrice;
    this.router.navigate(['/payment', totalCartPrice]);
   
  }

}
