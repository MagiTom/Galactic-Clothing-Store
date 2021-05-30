import { Component, OnInit } from '@angular/core';
import { productsForMan, productsForWoman, productsForChildren, Product } from '../../products';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products:Product[]=[];
  total:number;
  totalAmount=[];
  sum:number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
   this.products = this.cartService.getItems();
   console.log(this.products);
    this.getTotalPice();
   
  }

  addQuantity(value:number, product:Product){
    product.number = value;
    this.sum = this.cartService.getTotal();
  }

  removeProduct(item:Product){
    this.cartService.removeItem(item);
    this.getTotalPice();
  }

  getTotalPice(){
    if(this.products.length > 0){
      this.sum = this.cartService.getTotal();
     }
  }

}
