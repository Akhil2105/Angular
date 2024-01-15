

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  user: User = { name: '', email: '', number: '' };

  constructor(private router: Router) {}

  onSubmit(signupForm: NgForm): void {
    if (signupForm.valid) {
    
      this.router.navigate(['/welcome']);
    }
  }
}
