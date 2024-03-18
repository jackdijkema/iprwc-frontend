import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from '../../model/product.model';
import { AuthService } from '../auth.service';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL = environment.baseUrl;

  private apiUrl = `${this.BASE_URL}:8080/api/v1/products`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get<Product[]>(this.apiUrl, { headers: headers });
  }

  getProductById(id: string): Observable<Product> {
    const apiUrl = `${this.apiUrl}/${id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get<Product>(apiUrl, { headers: headers });
  }

  addProducts(products: Product[]): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + this.authService.getToken(),
      }),
    };
    return this.http.post(this.apiUrl, products, httpOptions);
  }

  deleteProductById(productId: string): Observable<any> {
    const apiUrl = `${this.BASE_URL}:8080/api/v1/products/${productId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    };
    return this.http.delete(apiUrl, httpOptions);
  }
}
