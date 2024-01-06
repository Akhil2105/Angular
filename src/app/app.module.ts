// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [AppComponent, WelcomeComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule], // Add RouterModule here

  bootstrap: [AppComponent],
})
export class AppModule {}
