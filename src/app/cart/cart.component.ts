import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { OrderItem } from '../../model/orderItem.model';
import { AccountService } from '../../services/account/account.service';
import { User } from '../../model/user';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order/order.service';
import { environment } from '../../environment/environment';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [NavbarComponent, CommonModule, RouterModule, RouterLink],
})
export class CartComponent implements OnInit {
  cartItems: Map<Product, number> = new Map<Product, number>();
  customer: User | null = null;
  orderItems: OrderItem[] = [];
  keysOfCartItems = Object.keys(this.cartItems);

  constructor(
    private cartService: CartService,
    private toastr: ToastrService,
    private accountService: AccountService,
    private http: HttpClient,
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router,
  ) {}

  BASE_URL = environment.baseUrl;

  getCartItems() {
    return Array.from(this.cartItems.keys());
  }

  token = this.authService.getToken();

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.accountService.userData$.subscribe((userData: User | null) => {
      this.customer = userData;
    });
    const claims = (this.authService.parseToken = (data) => {
      console.log(claims);
      console.log(data);
    });
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.cartItems.forEach((quantity, product) => {
      totalPrice += product.price * quantity;
    });
    return totalPrice;
  }

  getTotalItems(): number {
    let totalItems = 0;
    this.cartItems.forEach((quantity) => {
      totalItems += quantity;
    });
    return totalItems;
  }

  removeItem(product: Product): void {
    this.cartService.removeItem(product);
  }

  apiUrl = `${this.BASE_URL}:8080/api/v1/orders`;

  checkout(): void {
    this.orderItems = [];
    this.cartItems.forEach((quantity, product) => {
      const orderItem: OrderItem = {
        quantity: quantity,
        product: product.id,
      };
      this.orderItems.push(orderItem);
    });

    const orderItemsJSON = JSON.stringify({ orderItems: this.orderItems });

    this.orderService.createOrder(orderItemsJSON).subscribe({
      next: () => {
        this.toastr.success('Order created successfully', 'Success');
        // Redirect or perform any other action upon successful creation
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.toastr.error('Error creating order', 'Error');
        console.error('Error creating order:', error);
      },
    });
  }
}
