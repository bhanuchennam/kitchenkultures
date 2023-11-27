// authentication.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8081/userlogin';

  constructor(private http: HttpClient) {}

  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }

  getUserName(): Observable<string> {
    // Assuming your API returns the username, adjust the endpoint accordingly
    return this.http.get<string>(`${this.apiUrl}/get-userName`);
  }

  login(username: string, password: string): Observable<string> {
    const user = { username, password };
    return this.http.post<string>(this.apiUrl, user);
  }

  logout(): void {
    // Implement the logic to clear user-related information
    // For example, clear the user token, reset authentication state, etc.

    // For demonstration purposes, set the login status to false
    this.loggedInSubject.next(false);
  }
}
