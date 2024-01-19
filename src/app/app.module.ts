import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveLoginComponent } from './reactivelogin/reactivelogin.component';
import { AuthService } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, LoginComponent, SignupComponent, ReactiveLoginComponent],
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
  providers: [AuthService]
})
export class AppModule {}
