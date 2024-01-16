import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  reactivelogin(username: string, password: string): Observable<boolean> {
    console.log('Received username:', username);
    console.log('Received password:', password);

    
    if (username === 'abc@gmail.com' && password === 'Asdfg') {
        this.loggedIn = true;
        return of(true);
      } else {
        this.loggedIn = false;
        return throwError('Invalid credentials').pipe(
          catchError(() => of(false))
        );
      }
    }
  }