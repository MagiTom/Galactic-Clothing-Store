import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
// import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import {CartService } from './cart.service';
import { PriceCounterComponent } from './price-counter/price-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { ButtonBackComponent } from './button-back/button-back.component';
import { AdressFormComponent } from './adress-form/adress-form.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ProductCardComponent,
    PriceCounterComponent,
    LoginFormComponent,
    ButtonBackComponent,
    AdressFormComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    // AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  
  ],
  exports: [NavComponent, FooterComponent, ProductCardComponent, PriceCounterComponent, LoginFormComponent, ButtonBackComponent, AdressFormComponent, InputComponent],
  providers: [
    CartService
  ],

})
export class SharedModule { }
