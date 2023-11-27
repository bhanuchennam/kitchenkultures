import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.scss']
})
export class CustomerloginComponent {
  username: string = '';
  password: string = '';
  loginError: string | null = null;
  orders: Order[] | undefined;

  constructor(private authService: AuthenticationService, private router: Router, private orderService: OrderService) { }

  login(): void {
    console.log(this.username,this.password)
    const username = 'get-username-from-authentication'; // Replace with actual logic to get the username
    this.orderService.getOrdersByUsername(username)
      .subscribe(data => this.orders = data);
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.message === 'Login successful') {
          console.log('Login successful');
          this.router.navigate(['/customerorder']);
        } else {
          this.loginError = 'Incorrect username or password. Please try again.';
          console.log('Unexpected response status');
        }
      },
      (error) => {
        console.error(error);
        if (error.status === 401) {
          this.loginError = 'Wrong credentials. Please try again.';
          console.log('Wrong credentials');
        } else {
          this.loginError = 'An unexpected error occurred. Please try again later.';
          console.log('Unexpected error');
        }
      }
    );
  }
}
