// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  onSubmit(loginForm: any): void {
    if (loginForm.valid) {
      // Implement your login logic here
      console.log('Login Form Submitted:', loginForm.value);
    }
  }
}
