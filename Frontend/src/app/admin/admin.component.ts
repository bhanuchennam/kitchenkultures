import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeChef } from '../home-chef.model';
import { HomeChefService } from '../home-chef.service';
import { User } from '../user.model';
import { AuthenticationService } from '../authentication.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  homeChefs: HomeChef[] = [];
  users: User[] = [];

  constructor(
    private homeChefService: HomeChefService,
    private http: HttpClient,
    private router: Router,
    private authService: AuthenticationService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    // Load data on component initialization
    this.loadHomeChefs();
    this.loadUsers();
  }

  private loadHomeChefs() {
    this.homeChefService.getHomeChefs().subscribe(
      data => {
        this.homeChefs = data;
      },
      error => {
        console.error('Error fetching home chefs:', error);
      }
    );
  }

  private loadUsers() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteHomeChef(userName: string): void {
    if (confirm('Are you sure you want to delete this home chef?')) {
      this.homeChefService.deleteHomeChef(userName).subscribe(
        () => {
          // If the deletion is successful, reload the list of home chefs
          this.loadHomeChefs();
        },
        error => {
          console.error('Error deleting home chef:', error);
          // Handle the error as needed
        }
      );
    }
  }
  deleteuser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteuser(id).subscribe(
        () => {
          // If the deletion is successful, reload the list of users
          this.loadUsers();
        },
        error => {
          console.error('Error deleting user:', error);
          // Handle the error as needed
        }
      );
    }
  }

  logout() {
    // Call the logout method from your authentication service or perform necessary logout actions
    this.authService.logout();

    // Redirect to the login page or any other desired route
    this.router.navigate(['/']);
  }

}
