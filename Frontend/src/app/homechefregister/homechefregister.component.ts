import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homechefregister',
  templateUrl: './homechefregister.component.html',
  styleUrls: ['./homechefregister.component.scss']
})
export class HomechefregisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  user: any = {};

  ngOnInit(): void {
  }

  registerUser(): void {
    // Call the backend API to register the user
    this.http.post<any>('http://localhost:8081/homechefregister', this.user)
      .subscribe(response => {
        // Handle the response from the server
        console.log(response);
        console.log('Form submitted:', this.user);
        // Redirect to login page or handle as needed
        this.router.navigate(['/homechef']);
      }, error => {
        // Handle errors, e.g., display an error message to the user
        console.error(error);
        this.router.navigate(['/homechef']);
      });
    }
}
