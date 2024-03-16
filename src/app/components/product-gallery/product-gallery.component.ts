import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';
import { map } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../../model/product.model';
import { CartService } from '../../../services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [LucideAngularModule, NavbarComponent, CommonModule, RouterLink],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss',
})
export class ProductGalleryComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private toastr: ToastrService,
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(map((data) => data))
      .subscribe({
        next: (products: Product[]) => {
          this.products = products;
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        },
      });
  }

  addToCart(product: Product): void {
    if (product) {
      this.toastr.success('success', 'added to cart.');
      this.cartService.addToCart(product);
    }

    console.log(this.cartService.getCartItems());
  }

  encodeProductId(id: string): string {
    return encodeURIComponent(id);
  }
}
