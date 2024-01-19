import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  login(data: any):Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, data);
   
  }
  signup(data: any):Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, data);
  }
}
