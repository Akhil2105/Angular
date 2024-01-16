import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactivelogin.component.html',
  styleUrls: ['./reactivelogin.component.scss']
})
export class ReactiveLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}

