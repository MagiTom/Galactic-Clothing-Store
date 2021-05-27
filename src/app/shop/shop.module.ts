import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewShopComponent } from './view-shop/viewShop.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../shared/cart.service';
import { CartComponent } from './cart/cart.component';
import { LoginStepComponent } from './login-step/login-step.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SummaryComponent } from './summary/summary.component';
import { ShopRotingModule } from './shop-roting.module';
import { CartViewComponent } from './cart-view/cart-view.component';


@NgModule({
  declarations: [
    ViewShopComponent,
    ProductDetailsComponent,
    CartComponent,
    LoginStepComponent,
    ShippingComponent,
    SummaryComponent,
    CartViewComponent,
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // AppRoutingModule,
    RouterModule,
    ShopRotingModule,
  ],
  providers: [CartService]
})
export class ShopModule { }
