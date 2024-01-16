import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private apiUrl = 'http://localhost:3000/post_example'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  login(data: any):Promise<any> {
    return this.http.post<any>(this.apiUrl, data).toPromise()

  }
  
  
}
