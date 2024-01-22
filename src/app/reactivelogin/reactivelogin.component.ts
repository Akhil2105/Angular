import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators'; // Import catchError
import { DatabaseService } from '../services/database.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactivelogin.component.html',
  styleUrls: ['./reactivelogin.component.scss']
})
export class ReactiveLoginComponent {
  loginForm!: FormGroup;
  subscription: Subscription | undefined;
  receivedMessage: string | undefined;

  constructor(private route: Router, private fb: FormBuilder, private authService: DatabaseService) {
//   this.subscription=this.authService.message$.subscribe(
//     (message)=>   {
//       this.receivedMessage = JSON.parse(message)
//   }
//   )
// }
  }

  ngOnInit(): void {
    this.createReactiveLoginForm();
  }
      

  createReactiveLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required],
    });
  }

  onSubmit(loginForm: FormGroup): void {
    if(this.loginForm.valid){
      this.authService.reactivelogin(loginForm.value).pipe().subscribe((result: any) => {
        console.log("result",result);
        this.route.navigateByUrl('welcome');
      },
      (error) => {
        console.error('Login failed:', error);
      }
      )
    }
  }
}




  
      // this.authService.reactivelogin(username, password)
      //   .subscribe(
      //     (response) => {
      //       if (response) {
      //         alert('Login successful!');
      //         console.log('Login successful:', response);
      //       } else {
      //         alert('Invalid credentials');
      //         console.log('Invalid credentials');
      //       }
      //     },
      //     (error) => {
      //       console.error('Login failed:', error);
      //     }
      //   );


