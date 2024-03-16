import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
  ) {
    this.fetchUserData();
  }

  private userDataSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public userData$ = this.userDataSubject.asObservable();

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
        if (!response) {
          this.router.navigate(['/login']);
        }
      }),
    );
  }

  fetchUserData(): any {
    const headers = {
      Authorization: `Bearer ${this.authService.getToken()}`,
    };

    const apiUrl = 'http://localhost:8080/api/v1/users/customer';
    this.http
      .get<User>(apiUrl, { headers })
      .pipe(
        map((customerData: User) => {
          return customerData;
        }),
      )
      .subscribe({
        next: (user: User) => {
          this.userDataSubject.next(user);
        },
        error: (error) => {
          console.error('Error fetching user data:', error);
        },
      });
  }
}
