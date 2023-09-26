import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: any) {
    const currentCartItems = this.cartItemsSubject.value;
    currentCartItems.push(product);
    this.cartItemsSubject.next(currentCartItems);
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
  }
}
