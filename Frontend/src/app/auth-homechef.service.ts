import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHomechefService {

  private apiUrl = 'http://localhost:8081/cheflogin';

  constructor(private http: HttpClient) {}

  login(userName: string, password: string): Observable<string> {
    const user = { userName, password };
    return this.http.post<string>(this.apiUrl, user);
  }
}
