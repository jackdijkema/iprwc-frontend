import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from '../../model/product.model';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/v1/products';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Change '*' to your desired origin
    });

    // Making the HTTP request with headers
    return this.http.get<Product[]>(this.apiUrl, { headers: headers });
  }

  getProductById(id: string): Observable<Product> {
    const apiUrl = `${this.apiUrl}/${id}`;

    // Setting CORS headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Change '*' to your desired origin
    });

    // Making the HTTP request with headers
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
    const apiUrl = 'http://localhost:8080/api/v1/products/' + productId;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    };
    return this.http.delete(apiUrl, httpOptions);
  }
}
