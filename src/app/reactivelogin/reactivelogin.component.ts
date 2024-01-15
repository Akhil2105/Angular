import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactivelogin.component.html',
  styleUrls: ['./reactivelogin.component.scss']
})
export class ReactiveLoginComponent implements OnInit {
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted!', this.loginForm.value);
      // Add your authentication logic here
    }
  }
}
