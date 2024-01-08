
import { query } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  onSubmit(loginForm: any): void {
    if (loginForm.valid) {
    
      console.log('Login Form Submitted:', loginForm.value);
    }
  }
}
let paragraphElement = document.querySelector('.signup');
paragraphElement?.addEventListener('click', function() {
  alert('Button clicked!');
});