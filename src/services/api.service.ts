import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  PostLogin(payload: { email: string; password: string }) {
    const apiUrl = 'http://localhost:8080/api/v1/auth/authenticate';

    return this.http.post(apiUrl, payload).pipe(
      tap((response: any) => {
        if (response && response.token) {
          sessionStorage.setItem('token', response.token);
        }
      }),
    );
  }

  PostRegister(payload: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }) {
    const apiUrl = 'http://localhost:8080/api/v1/auth/register';

    return this.http.post(apiUrl, payload).pipe(
      tap((response: any) => {
        if (response) {
          this.router.navigate(['/login']);
        }
      }),
    );
  }
}
