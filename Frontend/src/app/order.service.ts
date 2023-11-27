import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Order {
  id: number;
  username: string;
  items: any[]; // You can adjust the type based on your actual data structure
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:8081/api/orders'; // Adjust your API endpoint

  constructor(private http: HttpClient) {}

  placeOrder(cartItems: any[]): Observable<any> {
    return this.http.post<any>(this.apiUrl, cartItems);
  }

  private orderedItems: any[] = [];

    addOrderedItem(item: any): void {
        this.orderedItems.push(item);
    }

    getOrderedItems(): any[] {
        return this.orderedItems;
    }

    getOrdersByUsername(username: string): Observable<Order[]> {
      return this.http.get<Order[]>(`${this.apiUrl}/user/${username}`);
  }
}
