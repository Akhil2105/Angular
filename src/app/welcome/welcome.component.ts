import { AuthService } from '@auth0/auth0-angular';
// import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
// import { DatabaseService } from '../services/database.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  result: any;
  constructor(private authService: DatabaseService) { }
  users = <any>[];
  ngOnInit(): void {


    this.authService.getUsers().pipe().subscribe((result: any) => {
      console.log("result", result);
      this.users = result.result;
    })

  }
}
