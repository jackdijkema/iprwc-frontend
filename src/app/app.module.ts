import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogIn, LucideAngularModule, ShoppingCart } from 'lucide-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ShoppingCart, LogIn})
  ]
})
export class AppModule { }
