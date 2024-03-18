import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductGalleryComponent } from '../components/product-gallery/product-gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [NavbarComponent, ProductGalleryComponent, RouterLink],
})
export class HomeComponent {}
