import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-homechefppage',
  templateUrl: './homechefppage.component.html',
  styleUrls: ['./homechefppage.component.scss']
})
export class HomechefppageComponent implements OnInit {

  items: any[] = [];
  editForm: FormGroup | undefined;

  constructor(private httpClient: HttpClient, private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {}

  editItem(item: any): void {
    console.log('Edit button clicked for item:', item);
    this.editForm = this.fb.group({
      id: [item.id],
      dishName: [item.dishName],
      unitPrice: [item.unitPrice],
      foodType: [item.foodType],
      active: [item.active],
      description: [item.description]
    });

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  cancelEdit() {
    // Clear the form without updating
    this.editForm?.reset();
    this.editForm = undefined;
  }

  //updateFood() {
    /*const value = this.editForm?.get('someControl')?.value;
    // Get input values using Angular's two-way data binding
    const id = (document.getElementById('id') as HTMLInputElement).value;
    const dishName = (document.getElementById('dishName') as HTMLInputElement).value;
    const unitPrice = (document.getElementById('unitPrice') as HTMLInputElement).value;
    const foodType = (document.getElementById('foodType') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;
    const active = (document.getElementById('active') as HTMLInputElement).value;*/
    updateFood() {
      // Get values from form controls within the editForm
      const id = this.editForm?.get('id')?.value;
      const dishName = this.editForm?.get('dishName')?.value;
      const unitPrice = this.editForm?.get('unitPrice')?.value;
      const foodType = this.editForm?.get('foodType')?.value;
      const description = this.editForm?.get('description')?.value;
      const active = this.editForm?.get('active')?.value;

    // Create an object with the data
    const formData = {
      id: id,
      dishName: dishName,
      unitPrice: unitPrice,
      active: active,
      foodType: foodType,
      description: description
    };

    // Make a PUT request to the backend API for updating
    this.httpClient.put('http://localhost:8081/updateItem', formData)
      .subscribe(data => {
        console.log('Data sent to the server:', data);

        const updatedItemIndex = this.items.findIndex(item => item.id === id);
        if (updatedItemIndex !== -1) {
          this.items[updatedItemIndex] = formData; // Replace with updated data
        }

        this.editForm?.reset();
        this.editForm = undefined;
        this.router.navigate(['/homechefpage']);
        // You can handle the response from the server here
      }, error => {
        console.error('Error:', error);
        this.router.navigate(['/homechefpage']);
        // Handle errors here
      });
    }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:8081/api/orders/getorders').subscribe(
      (data) => {
        this.items = data;
        console.log('status', this.items);
      },
      (error) => {
        console.error('Error fetching records:', error);
      }
    );
  }
}
