import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerpanelComponent } from './customerpanel/customerpanel.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from '../services/guard/user.guard';
import { LoginGuard } from '../services/guard/login.guard';
import { ProductDetailComponent } from './components/product-gallery/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: CustomerpanelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminpanelComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'product/:uuid',
    component: ProductDetailComponent,
  },
];
