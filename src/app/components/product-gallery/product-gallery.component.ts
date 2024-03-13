import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss',
})
export class ProductGalleryComponent {}
