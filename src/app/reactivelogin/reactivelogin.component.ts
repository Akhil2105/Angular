import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators'; // Import catchError

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactivelogin.component.html',
  styleUrls: ['./reactivelogin.component.scss']
})
export class ReactiveLoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createReactiveLoginForm();
  }

  createReactiveLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
  
      this.authService.reactivelogin(username, password)
        .subscribe(
          (response) => {
            if (response) {
              alert('Login successful!');
              console.log('Login successful:', response);
            } else {
              alert('Invalid credentials');
              console.log('Invalid credentials');
            }
          },
          (error) => {
            console.error('Login failed:', error);
          }
        );
    }
  }
  
}
