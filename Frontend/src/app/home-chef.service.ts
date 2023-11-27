import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeChef } from './home-chef.model';

@Injectable({
  providedIn: 'root'
})
export class HomeChefService {

  private apiUrl = 'http://localhost:8081/gethomechefs?timestamp=';

  constructor(private http: HttpClient) {}

  getHomeChefs(): Observable<HomeChef[]> {
    return this.http.get<HomeChef[]>(this.apiUrl + new Date().getTime());
  }



  deleteHomeChef(userName: String): Observable<void> {
    const deleteUrl = `http://localhost:8081/deletehomechefbyid/${userName}`;
    return this.http.delete<void>(deleteUrl);
  }
}
