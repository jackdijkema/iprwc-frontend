import { Injectable } from '@angular/core'
import { Product } from '../../model/product.model'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: { product: Product; quantity: number }[] = []

  constructor() {
    const storedCartItems = localStorage.getItem('cartItems')
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems)
    }
  }

  addToCart(product: Product): void {
    let found = false

    this.cartItems.forEach((item) => {
      if (item.product.id === product.id) {
        item.quantity++
        found = true
      }
    })

    if (!found) {
      this.cartItems.push({ product, quantity: 1 })
    }

    this.saveCartItemsToLocalStorage()
  }

  removeItem(product: Product): void {
    const index = this.cartItems.findIndex(
      (item) => item.product.id === product.id,
    )
    if (index !== -1) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--
      } else {
        this.cartItems.splice(index, 1)
      }
      this.saveCartItemsToLocalStorage()
    }
  }

  emptyCart(): void {
    this.cartItems = []
    localStorage.removeItem('cartItems')
  }

  private saveCartItemsToLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
  }

  getCartItems(): { product: Product; quantity: number }[] {
    console.log(this.cartItems)
    return this.cartItems
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0)
  }
}
