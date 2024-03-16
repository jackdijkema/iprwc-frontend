import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';

import {
  Disc3,
  LogIn,
  LucideAngularModule,
  ShoppingCart,
} from 'lucide-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  providers: [],
  imports: [
    ToastrModule.forRoot({
      closeButton: true, // Show close button
      progressBar: true, // Show progress bar
      positionClass: 'toast-top-right', // Position of the toastr
      timeOut: 3000, // Time to close the toastr automatically
      preventDuplicates: true, // Prevent duplicate toasts
    }),
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
