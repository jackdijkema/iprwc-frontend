import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [LucideAngularModule, NavbarComponent, CommonModule],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss',
})
export class ProductGalleryComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: any[] = [];

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(map((data) => data))
      .subscribe({
        next: (products: []) => {
          this.products = products;
          console.log('fetch success', products);
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        },
      });
  }
}
