import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../app/products'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  total: number;
  totalAmount = [];
  sum: number;


  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
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

  getShipping() {
    return this.http.get<{ company: string, price: number }[]>('/assets/shipping.json');
  }

  getTotal() {
    this.totalAmount = [];
    this.items.forEach(product => {
      this.total = product.price * product.number;
      this.totalAmount.push(this.total);
    })

    console.log(this.totalAmount)

    this.sum = this.totalAmount.reduce(function (a, b) {
      return a + b;
    });
    console.log(this.sum)

    return this.sum

  }

  removeItem(item: Product) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    item.number = 1;
  }

}
