import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  Disc3,
  LogIn,
  LucideAngularModule,
  ShoppingCart,
} from 'lucide-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ ShoppingCart, LogIn, Disc3 }),
    AppModule,
  ],
})
export class AppModule { }
