import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewShopComponent } from './view-shop/viewShop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginStepComponent } from './login-step/login-step.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SummaryComponent } from './summary/summary.component';
import { CartViewComponent } from './cart-view/cart-view.component';

const routes: Routes = [{
  path: '', component: ViewShopComponent
},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRotingModule { }
