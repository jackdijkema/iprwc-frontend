import { Inject, Injectable } from '@angular/core';

import { AccountService } from './account/account.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accountService = Inject(AccountService);
  constructor() {}

  user: User | null = null;

  getToken() {
    return sessionStorage.getItem('token');
  }

  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  removeToken(): void {
    sessionStorage.removeItem('token');
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    if (!token) return false;
    return true;
  }

  parseToken = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64));

    return JSON.parse(jsonPayload);
  };

  public isAdmin(): boolean {
    const token = sessionStorage.getItem('token');
    if (!token) return false;

    const claims = this.parseToken(token);
    if (claims.role !== 'ADMIN') return false;
    return true;
  }



}
