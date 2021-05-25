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

   if(this.products.length > 0){
    this.getTotal();
   }
  }

  addQuantity(value:number, product:Product){
    product.number = value;
    // this.total = product.price * value;
    this.getTotal();
  }

  getTotal(){
    this.totalAmount = [];
    this.products.forEach(product =>{
      this.total = product.price * product.number;
      this.totalAmount.push(this.total);
    })

    console.log(this.totalAmount)
  
    this.sum = this.totalAmount.reduce(function(a, b) {
      return a + b;
    });
    console.log(this.sum)
  }

  removeItem(item:Product){
    const index = this.products.indexOf(item);
    this.products.splice(index, 1);
    item.number = 1;
    this.getTotal();
  }
}
