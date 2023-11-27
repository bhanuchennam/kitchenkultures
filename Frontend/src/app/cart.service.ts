import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomerHome } from './CustomerHome.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CustomerHome[] = [];
  private cartItemsSubject = new BehaviorSubject<CustomerHome[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: CustomerHome) {
    this.cartItems.push(item);
  this.cartItemsSubject.next(this.cartItems);
  }

  /*getCartItems(): CustomerHome[] {
    return this.cartItemsSubject.value;
  }*/
  getCartItems(): CustomerHome[] {
    return this.cartItems;
  }

  getCartCount(): number {
    return this.cartItemsSubject.value.length;
  }

  clearCart() {
    this.cartItemsSubject.next([]);

    // Log that the cart has been cleared
    console.log('Cart Cleared');
  }
}
