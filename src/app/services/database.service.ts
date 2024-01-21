import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  private baseUrl = 'http://localhost:3000';

  constructor(private route: Router, private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, data);
  }
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/userList`);
  }
  reactivelogin(data:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/reactivelogin`,data);
  }
  sendMessage(userDetails: string) {
    this.messageSource.next(userDetails);
  }
  signup(data: any): void {
    this.http.post<any>(`${this.baseUrl}/register`, data).pipe().subscribe((result: any) => {
      console.log(result.status);
      if (result.status === true) {
        this.route.navigateByUrl('login');
        this.sendMessage(JSON.stringify(result.user))
      }
    })
  }
}
