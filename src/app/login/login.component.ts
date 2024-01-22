import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = NgForm;
  username: string = '';
  password: string = '';
  subscription: Subscription;
  receivedMessage: string | undefined;
  Password: boolean = false;

  constructor(private route: Router, private authService: DatabaseService) {
    this.subscription = this.authService.message$.subscribe(
      (message) => {
        this.receivedMessage = JSON.parse(message);
      }
    );
  }

  togglePasswordVisibility(): void {
    this.Password = !this.Password;
  
  }

  onSubmit(loginForm: any): void {
    const isValid = loginForm.valid || !!this.receivedMessage;
    if (isValid) {
      this.authService.login(loginForm.value || this.receivedMessage).pipe().subscribe((result: any) => {
        console.log("result", result);
        this.route.navigateByUrl('welcome');
      });
    }
  }
}
