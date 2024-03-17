import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { OrderviewComponent } from '../customerpanel/orderview/orderview.component';

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.scss',
  imports: [NavbarComponent, OrderviewComponent],
})
export class AdminpanelComponent {


  





}
