import { NgModule } from '@angular/core';
import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';

import {
  Disc3,
  LogIn,
  LucideAngularModule,
  ShoppingCart,
} from 'lucide-angular';
import { RouterLink, RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  providers: [],
  imports: [
    RouterLink,
    ToastrModule.forRoot(),
    CommonModule,
    HttpClientModule,
    RouterModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    LucideAngularModule.pick({ ShoppingCart, LogIn, Disc3 }),
    ToastNoAnimationModule.forRoot(),
  ],
})
export class AppModule {}
