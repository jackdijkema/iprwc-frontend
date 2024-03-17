import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccountService } from '../account/account.service';
import { map } from 'rxjs/operators';
import { User } from '../../model/user';

export const AdminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const accountService = inject(AccountService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return router.createUrlTree(['/login']); // Redirect to login if not authenticated
  }

  return accountService.userData$.pipe(
    map((userData: User | null) => {
      if (userData && userData?.role === 'ADMIN') {
        return true; // User is admin, allow access
      } else {
        return router.createUrlTree(['/']); // Redirect to home if not admin
      }
    }),
  );
};
