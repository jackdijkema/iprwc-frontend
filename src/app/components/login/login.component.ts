import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [NavbarComponent, LucideAngularModule],
})
export class LoginComponent {}
