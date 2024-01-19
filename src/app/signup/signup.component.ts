
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, NgForm, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { User } from '../model/user.model';
import { DatabaseService } from '../services/database.service';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  

  constructor(private route: Router, private fb: FormBuilder, private authService: DatabaseService) {}

  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm(){
    this.signupForm = this.fb.group({
      username : ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      // username : ['' ],
      // password: ['' ],
    })
  }
  
  

  onSubmit(signupForm: FormGroup): void {
    if (signupForm.valid){
      this.authService.signup(this.signupForm.value);
      // .pipe().subscribe((result: any)=> {
      //   console.log(result.status);
      //   if(result.status === true){
      //     this.route.navigateByUrl('login');
      //   }
      // })
    }
  }
}


 

//   // constructor(private router: Router) {}

//   // onSubmit(signupForm: NgForm): void {
//   //   if (signupForm.valid) {
    
//   //     this.router.navigate(['/welcome']);
//   //   }
//   }
// // }
// function result(value: any): void {
//   throw new Error('Function not implemented.');
// }

