import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { LoginComponent } from './login/login.component';
import { CustomerpanelComponent } from './customerpanel/customerpanel.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../services/guard/user.guard';
import { LoginGuard } from '../services/guard/login.guard';
import { ProductDetailComponent } from './home/product-gallery/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

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
    canActivate: [AuthGuard],

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
