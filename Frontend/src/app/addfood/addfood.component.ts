import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.scss']
})
export class AddfoodComponent {
  constructor(private http: HttpClient, private router: Router) {}

  addFood() {
    // Get input values using Angular's two-way data binding
    const id = (document.getElementById('id') as HTMLInputElement).value;
    const dishName = (document.getElementById('dishName') as HTMLInputElement).value;
    const unitPrice = (document.getElementById('unitPrice') as HTMLInputElement).value;
    const active = (document.getElementById('active') as HTMLInputElement).value;
    const foodType = (document.getElementById('foodType') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;
    const createDate = (document.getElementById('createDate') as HTMLInputElement).value;
    const costUpdate = (document.getElementById('costUpdate') as HTMLInputElement).value;

    // Create an object with the data
    const formData = {
      id: id,
      dishName: dishName,
      unitPrice: unitPrice,
      foodType: foodType,
      active: active,
      description: description,
      createDate: createDate,
      costUpdate: costUpdate
    };

    // Make a POST request to the backend API
    this.http.post('http://localhost:8081/addDish', formData)
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
