import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8081/api/admin';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    const adminLoginRequest = { username, password };
    return this.http.post<string>(`${this.apiUrl}/login`, adminLoginRequest);
  }
}
