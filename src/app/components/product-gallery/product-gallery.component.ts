import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [LucideAngularModule, NavbarComponent, CommonModule],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss',
})
export class ProductGalleryComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  products: any[] = [];

  ngOnInit(): void {
    this.apiService
      .getProducts()
      .pipe(
        map((data) => data), // Transform the data to extract products array
      )
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
