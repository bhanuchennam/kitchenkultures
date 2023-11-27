import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8081/getusers';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }



  deleteuser(id: number): Observable<void> {
    const deleteUrl = `http://localhost:8081/deleteuser/${id}`;
    return this.http.delete<void>(deleteUrl);
  }
}

