import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../../app/products'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:Product[]=[];
  constructor(private http: HttpClient) { }

  addToCart(product:Product) {
    this.items.push(product);
    console.log(this.items)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShipping(){
    return this.http.get<{company: string, price: number}[]>('/assets/shipping.json');
  }

}
