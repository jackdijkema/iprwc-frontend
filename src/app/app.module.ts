import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  Disc3,
  LogIn,
  LucideAngularModule,
  ShoppingCart,
} from 'lucide-angular';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@NgModule({
  declarations: [],
  providers: [ApiService],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    LucideAngularModule.pick({ ShoppingCart, LogIn, Disc3 }),
  ],
})
export class AppModule { }
