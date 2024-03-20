import { Component, OnInit } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'
import { AuthService } from '../../../services/auth.service'
import { Router, RouterLink, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { AccountService } from '../../../services/account/account.service'
import { User } from '../../../model/user'
import { MenuItem } from '../../../model/menu-item'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private accountService: AccountService,
  ) {}

  customer: User | null = null

  menuItems: MenuItem[] = [
    { label: 'Products', route: '/products', show: true },
    { label: 'My Orders', route: '/order', show: this.isLoggedIn() },
    {
      label: 'Adminpanel',
      route: '/admin',
      show: this.isLoggedIn() && this.isAdmin(this.customer?.role || ''),
    },
  ]

  mobileMenuItems: MenuItem[] = [
    { label: 'Products', route: '/products', show: true },
    { label: 'My Orders', route: '/order', show: this.isLoggedIn() },
    {
      label: 'Adminpanel',
      route: '/admin',
      show: this.isLoggedIn() && this.isAdmin(this.customer?.role || ''),
    },
  ]

  mobileMenuVisible = false

  toggleMobileMenu(): void {
    this.mobileMenuVisible = !this.mobileMenuVisible
  }

  userData$ = this.accountService.userData$

  ngOnInit(): void {
    this.accountService.userData$.subscribe((userData) => {
      this.customer = userData
    })
  }

  isAdmin(role: string): boolean {
    if (!role) {
      return false
    }

    if (role === 'ADMIN') {
      return true
    }
    return false
  }

  isLoggedIn(): boolean {
    if (this.authService.isAuthenticated()) {
      return true
    }
    return false
  }

  logout(): void {
    if (this.authService.getToken()) return this.authService.removeToken()
    this.router.navigate(['/login'])
  }
}
