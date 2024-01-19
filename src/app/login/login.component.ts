import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  apiCall: any;
  username: string = '';
  password: string = '';

  constructor(private authService: DatabaseService) {}

  onSubmit(loginForm: any): void {
    if (loginForm.valid) {
    this.authService.login(loginForm.value).pipe().subscribe((result: any) => {
      console.log("result",result);
      if(result === true){
        alert('login successful');
      }
      else{('invalid credentials');
      }
    })    
    }
  }
}
