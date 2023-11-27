import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatefood',
  templateUrl: './updatefood.component.html',
  styleUrls: ['./updatefood.component.scss']
})
export class UpdatefoodComponent {
  constructor(private http: HttpClient, private router: Router) {}

  updateFood() {
    // Get input values using Angular's two-way data binding
    const id = (document.getElementById('id') as HTMLInputElement).value;
    const dishName = (document.getElementById('dishName') as HTMLInputElement).value;
    const unitPrice = (document.getElementById('unitPrice') as HTMLInputElement).value;
    const foodType = (document.getElementById('foodType') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;

    // Create an object with the data
    const formData = {
      id: id,
      dishName: dishName,
      unitPrice: unitPrice,
      foodType: foodType,
      description: description
    };

    // Make a PUT request to the backend API for updating
    this.http.put('http://localhost:8081/updateItem', formData)
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
