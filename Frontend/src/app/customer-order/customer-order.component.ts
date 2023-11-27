import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerHome } from '../CustomerHome.model';
import { AuthenticationService } from '../authentication.service';
import { CartService } from '../cart.service';
import { CustomerHomeService } from '../customerhome.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss'],
})
export class CustomerOrderComponent implements OnInit {
  items: CustomerHome[] = [];
  cartCount = 0;
  isCartVisible = false;
  cartItems: CustomerHome[] = []; // Modify to store CustomerHome items in the cart
  orderStatus: string | null = null;
  orders: any[] = [];
  userName: string | undefined;

  constructor(
    private customerHomeService: CustomerHomeService,
    private cartService: CartService,
    private orderService: OrderService,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  addToCart(item: CustomerHome) {
    this.cartService.addToCart(item);
    this.cartItems = this.cartService.getCartItems(); // Update cartItems internally
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
    this.cartItems = this.cartService.getCartItems();
  }

  //placeOrder() {
  // Get the current cart items from the internal variable
  //const cartItems = this.cartItems;

  // Now you can send the cart items to the Home Chef page
  // You might want to implement a service or use a state management solution for communication
  // For simplicity, let's assume you have a service called OrderService
  //this.orderService.sendOrderToHomeChef(cartItems);
  //console.log("before order service:", cartItems);
  //}

  placeOrder() {
    const cartItems = this.cartService.getCartItems();
    this.snackBar.open('Order placed successfully!', 'Close', {
      duration: 3000,
    });

    if (cartItems.length > 0) {
      this.orderService.placeOrder(cartItems).subscribe(
        (response) => {
          this.orderStatus = 'ok'; // Set the order status
          this.cartService.clearCart();
          this.snackBar.open('Order placed successfully!', 'Close', {
            duration: 3000,
          });
        },
        (error) => {
          this.orderStatus = 'error'; // Set the order status in case of an error
          console.error('Error placing order:', error);
        }
      );
    } else {
      this.snackBar.open('Cart is empty. Add items before placing an order.', 'Close', {
        duration: 3000,
      });
    }
  }

  logout() {
    // Call the logout method from your authentication service or perform necessary logout actions
    this.authService.logout();

    // Redirect to the login page or any other desired route
    this.router.navigate(['/']);
  }





  ngOnInit(): void {

    this.customerHomeService.getCustomers().subscribe((data) => {
      this.filterItems = data;
      this.items = data;
    });
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    
      console.log(this.cartItems)
      this.cartCount = items.length;
    });
  }
  public filterItems: any;
  filter(item: any, items: any) {
    console.log(item, items)
    this.filterItems = items.filter((x: any) => x.foodType == item.foodType);

  }
}
