import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  loggedIn(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    return false;
  }

  logout(): void {
    if (this.authService.getToken()) return this.authService.removeToken();
    this.router.navigate(['/login']);
  }
}
