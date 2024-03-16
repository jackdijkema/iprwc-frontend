import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
  ) {}

  getProducts(): Observable<any> {
    const apiUrl = 'http://localhost:8080/api/v1/products';
    return this.http.get(apiUrl);
  }
}
