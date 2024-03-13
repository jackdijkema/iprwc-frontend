import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerpanelComponent } from './customerpanel/customerpanel.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [loginGuard],
  },
  {
    path: 'customer',
    component: CustomerpanelComponent,
    // canActivate: [loginGuard],
  },
  {
    path: 'admin',
    component: AdminpanelComponent,
    // canActivate: [loginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [loginGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [loginGuard],
  },
];
