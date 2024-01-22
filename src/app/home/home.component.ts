import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { ProductGalleryComponent } from "../components/product-gallery/product-gallery.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavbarComponent, ProductGalleryComponent]
})



export class HomeComponent {

}
