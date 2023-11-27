import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if (username && password) {
      this.adminService.login(username, password).subscribe(
        response => {
          console.log(response); // Handle success response
        },
        error => {
          console.error(error); // Handle error response
        }
      );
    } else {
      console.error('Username or password is null or undefined');
    }
  }
}
