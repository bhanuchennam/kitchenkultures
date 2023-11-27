import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHomechefService } from '../auth-homechef.service';

@Component({
  selector: 'app-homechef',
  templateUrl: './homechef.component.html',
  styleUrls: ['./homechef.component.scss']
})
export class HomechefComponent{

  userName: string = '';
  password: string = '';

  constructor(private authService: AuthHomechefService, private router: Router) {}

  login(): void {
    this.authService.login(this.userName, this.password).subscribe(
      (response: any) => {
        if (response.message && response.message === 'Login successful') {
          console.log('Login successful');
          this.router.navigate(['/homechefpage']);
          // Redirect or perform actions upon successful login
        } else {
          console.log('Unexpected response status');
          // Handle unexpected response status (you may want to display an error message)
        }
      },
      (error) => {
        console.error(error); // Handle error
        if (error.status === 401) {
          console.log('Wrong credentials'); // Display a message for wrong credentials
          // Optionally, you can show a message to the user in the UI
        } else {
          console.log('Unexpected error');
          // Handle unexpected errors (you may want to display an error message)
        }
      }
    );
  }
}

