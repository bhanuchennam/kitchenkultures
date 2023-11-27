import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletedish',
  templateUrl: './deletedish.component.html',
  styleUrls: ['./deletedish.component.scss']
})
export class DeletedishComponent {

  constructor(private http: HttpClient, private router: Router) {}

  deleteFood() {
    // Get input value using Angular's two-way data binding
    const id = (document.getElementById('id') as HTMLInputElement).value;

    // Make a DELETE request to the backend API for deletion
    this.http.delete(`http://localhost:8081/deleteItem/${id}`)
      .subscribe(data => {
        console.log('Data sent to the server:', data);
        this.router.navigate(['/homechefpage']);
        // You can handle the response from the server here
      }, error => {
        console.error('Error:', error);
        this.router.navigate(['/homechefpage']);
        // Handle errors here
      });
  }

}
