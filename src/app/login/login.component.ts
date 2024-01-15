import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  apiCall: any;

  onSubmit(loginForm: any): void {
    if (loginForm.valid) {
    this.apiCall.login(loginForm).then((result: any) => {
      console.log("result",result);
    })     
  .catch((error: any) => {
    console.error('Error:', error);
  });
    }
  }
}
