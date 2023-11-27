import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  userName: string | undefined;
  orders: any[] = [];

  constructor(private authService: AuthenticationService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.authService.getUserName().subscribe(
      (userName) => {
        this.userName = userName;
        // Use the username to fetch orders or perform other actions
        this.fetchOrders();
      },
      (error) => {
        console.error('Error fetching username:', error);
      });

  }

  fetchOrders() {
    if (this.userName) {
      this.orderService.getOrdersByUsername(this.userName).subscribe(
        (data) => {
          this.orders = data;
        },
        (error) => {
          console.error('Error fetching orders:', error);
        }
      );
    } else {
      console.warn('Username is not available.');
    }
  }


}
