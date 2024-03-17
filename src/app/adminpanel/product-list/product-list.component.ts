import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../model/product.model';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getProducts()
      .pipe(map((data: any) => data))
      .subscribe({
        next: (products: Product[]) => {
          this.products = products;
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        },
      });
  }

  deleteById(id: string) {
    if (!confirm('Are you sure to delete this product? ')) {
      return;
    }

    this.productService.deleteProductById(id).subscribe({
      next: () => {
        console.log('Product deleted successfully');
        this.toastr.success('Product removed.', 'Success');
      },
      error: (err) => {
        console.error('Error deleting product:', err);
        this.toastr.error('Product deletion failed', 'Error');
      },
    });
  }
}
