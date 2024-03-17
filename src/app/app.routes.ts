import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerpanelComponent } from './customerpanel/customerpanel.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from '../services/guard/user.guard';
import { LoginGuard } from '../services/guard/login.guard';
import { ProductDetailComponent } from './components/product-gallery/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AdminGuard } from '../services/guard/admin.guard';

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
    canActivate: [AdminGuard],
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
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
  },
];
