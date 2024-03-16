import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Map<Product, number> = new Map();

  constructor() {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = new Map(JSON.parse(storedCartItems));
    }
  }

  addToCart(product: Product): void {
    let found = false;

    this.cartItems.forEach((quantity, existingProduct) => {
      if (existingProduct.id === product.id) {
        this.cartItems.set(existingProduct, quantity + 1);
        found = true;
      }
    });

    if (!found) {
      this.cartItems.set(product, 1);
    }

    this.saveCartItemsToLocalStorage();
  }

  removeItem(product: Product): void {
    if (this.cartItems.has(product)) {
      const quantity: number | undefined = this.cartItems.get(product);
      if (quantity && quantity > 1) {
        this.cartItems.set(product, quantity - 1);
      } else {
        this.cartItems.delete(product);
      }
      this.saveCartItemsToLocalStorage();
    }
  }

  emptyCart(): void {
    this.cartItems.clear();
    localStorage.removeItem('cartItems');
  }

  private saveCartItemsToLocalStorage(): void {
    localStorage.setItem(
      'cartItems',
      JSON.stringify(Array.from(this.cartItems.entries())),
    );
  }

  getCartItems(): Map<Product, number> {
    console.log(this.cartItems);
    return this.cartItems;
  }

  getTotalQuantity(): number {
    let totalQuantity = 0;
    this.cartItems.forEach((quantity) => {
      totalQuantity += quantity;
    });
    return totalQuantity;
  }
}
