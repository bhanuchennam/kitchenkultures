import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerHome } from './CustomerHome.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerHomeService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<CustomerHome[]> {
    return this.http.get<CustomerHome[]>(`${this.baseUrl}/getDish` , { withCredentials: true });
  }
}
