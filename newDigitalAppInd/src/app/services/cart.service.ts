import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  // Add a new BehaviorSubject for the total cart price
  private totalCartPriceSubject = new BehaviorSubject<number>(0);
  totalCartPrice$: Observable<number> = this.totalCartPriceSubject.asObservable();


  addToCart(product: any) {
    const currentCartItems = this.cartItemsSubject.value;
    currentCartItems.push(product);
    this.cartItemsSubject.next(currentCartItems);
    // Recalculate and update the total cart price
    this.calculateTotalPrice();
  }

  getCartItems() {
    return this.cartItemsSubject.value;
  }

  // calculateTotalPrice() {
  //   const cartItems = this.getCartItems();
  //   return cartItems.reduce((total, item) => total + item.price, 0);
  // }
  calculateTotalPrice() {
    const cartItems = this.getCartItems();
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  }

  removeItemFromCart(itemIndex: number) {
    const cartItems = this.getCartItems();
    cartItems.splice(itemIndex, 1);
    this.cartItemsSubject.next(cartItems);

    // Recalculate and update the total cart price
    this.calculateTotalPrice();
  }
}
