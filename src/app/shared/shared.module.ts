import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AppRoutingModule } from '../app-routing.module';
import {CartService } from './cart.service';
import { PriceCounterComponent } from './price-counter/price-counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ProductCardComponent,
    PriceCounterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  
  ],
  exports: [NavComponent, FooterComponent, ProductCardComponent, PriceCounterComponent],
  providers: [
    CartService
  ],

})
export class SharedModule { }
