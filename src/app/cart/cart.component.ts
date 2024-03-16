import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CartService } from '../../services/cart/cart.service';
import { Product } from '../../model/product.model';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private toastr: ToastrService,
  ) {}

  cartItems: Map<Product, number> = this.cartService.getCartItems();

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
}
