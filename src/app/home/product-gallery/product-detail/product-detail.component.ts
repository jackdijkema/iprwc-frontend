import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../../../../services/product/product.service'
import { Product } from '../../../../model/product.model'
import { NavbarComponent } from '../../../components/navbar/navbar.component'
import { CommonModule } from '@angular/common'
import { CartService } from '../../../../services/cart/cart.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  standalone: true,
  styleUrls: ['./product-detail.component.scss'],
  imports: [NavbarComponent, CommonModule],
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product('', '', 0, '', '', '')

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService,
  ) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product)
    this.toastr.success('Added to cart.', 'Succes')
  }

  ngOnInit() {
    const productId = this.route.snapshot.params['uuid']

    console.log('product id: ', productId)
    this.productService.getProductById(productId).subscribe((data: Product) => {
      this.product = data
      console.log(data)
    })
  }
}
