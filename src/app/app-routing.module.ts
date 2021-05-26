import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './home/view/view.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ViewShopComponent } from './shop/view-shop/viewShop.component';
import { CartComponent } from './shop/cart/cart.component';
import { LoginStepComponent } from './shop/login-step/login-step.component';
import { ShippingComponent } from './shop/shipping/shipping.component';
import { SummaryComponent } from './shop/summary/summary.component';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './shop/cart-view/cart-view.component';

const routes: Routes = [
  {
    path:"",
    component:ViewComponent, pathMatch: 'full'
  },
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then( m => m.ShopModule)},

  {path: 'products/:productId', component: ProductDetailsComponent},

  {path: 'cart', component: CartViewComponent, children: [
    {path: '', component: CartComponent},
    {path: 'loginStep', component: LoginStepComponent},
    {path: 'shipping', component: ShippingComponent},
    {path: 'summary', component: SummaryComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
