import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  BASE_URL = environment.baseUrl;

  apiUrl = `${this.BASE_URL}/api/v1/orders`;

  createOrder(payload: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authService.getToken(),
    });
    return this.http.post(this.apiUrl, payload, { headers });
  }
}
