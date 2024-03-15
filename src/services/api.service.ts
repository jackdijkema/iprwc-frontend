import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
  ) {}

  PostLogin(payload: { email: string; password: string }) {
    const apiUrl = 'http://localhost:8080/api/v1/auth/authenticate';

    return this.http.post(apiUrl, payload).pipe(
      tap((response: any) => {
        if (response && response.token) {
          this.authService.setToken(response.token);
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

  getProducts(): Observable<any> {
    const apiUrl = 'http://localhost:8080/api/v1/products';
    return this.http.get(apiUrl);
  }
}
