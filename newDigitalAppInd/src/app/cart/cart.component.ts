import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  
  items = [    { name: 'Product A', price: 10 },    { name: 'Product B', price: 15 },    { name: 'Product C', price: 20 },  ];
  
  // Define a signal for the list of items
  itemList = signal(this.items);
  
  // Define a computed value for the total price
  totalPrice = computed(() => {
    return this.itemList().reduce((acc, curr) => acc + curr.price, 0);
  });
  
  removeItem(item) {
    // Update the itemList signal by removing the selected item
    this.itemList.set(this.itemList().filter((i) => i !== item));
  }

  addItemToCart(item) {
    // Add the selected item to the items list
    this.items.push(item);
    // Update the itemList signal
    this.itemList.set(this.items);
  }
  

}
