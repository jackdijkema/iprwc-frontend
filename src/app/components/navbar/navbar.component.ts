import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../../services/account/account.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private accountService: AccountService,
  ) {}

  userData$ = this.accountService.userData$;

  customer: User | null = null;

  ngOnInit(): void {
    this.accountService.userData$.subscribe((userData) => {
      this.customer = userData;
    });
  }

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
