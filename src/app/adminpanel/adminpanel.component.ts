import { Component } from '@angular/core'
import { NavbarComponent } from '../components/navbar/navbar.component'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { CreateProductComponent } from './create-product/create-product.component'
import { ProductListComponent } from './product-list/product-list.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.scss',
  imports: [
    NavbarComponent,
    FormsModule,
    CommonModule,
    CreateProductComponent,
    ProductListComponent,
    RouterLink,
  ],
})
export class AdminpanelComponent {}
