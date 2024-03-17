import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../model/product.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-create-product',
  standalone: true,
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
  imports: [NavbarComponent, FormsModule, CommonModule],
})
export class CreateProductComponent {
  name: string = '';
  artist: string = '';
  price: number = 0;
  productUrl: string = '';
  bio: string = '';

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
  ) {}

  submitForm(): void {
    products: [] = [];

    const payload = {
      name: this.name,
      artist: this.artist,
      price: this.price,
      bio: this.bio,
      photoUrl: this.productUrl,
      id: '',
    };

    this.products.push(payload);

    console.log(this.products);
    this.productService.addProducts(this.products).subscribe({
      next: (response: any) => {
        console.log('Products successfully added:', response);
        this.toastr.success('Product added', 'Success');
        return;
      },
      error: (error: any) => {
        console.error('There was a problem adding products:', error);
        this.toastr.error('Product add failed.', 'Error');
      },
    });
  }
}
