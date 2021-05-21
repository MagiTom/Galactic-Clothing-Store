import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewShopComponent } from './view-shop/viewShop.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CartService } from '../shared/cart.service';
import { CartComponent } from './cart/cart.component'

@NgModule({
  declarations: [
    ViewShopComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CartService]
})
export class ShopModule { }
