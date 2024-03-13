import { Component } from '@angular/core';
import { OrderviewComponent } from '../components/orderview/orderview.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-customerpanel',
  standalone: true,
  templateUrl: './customerpanel.component.html',
  styleUrl: './customerpanel.component.scss',
  imports: [OrderviewComponent, NavbarComponent],
})
export class CustomerpanelComponent {}
