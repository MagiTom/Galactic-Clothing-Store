import { Component, OnInit } from '@angular/core';
import { productsForMan, productsForWoman, productsForChildren, Product } from '../../products';
import { ActivatedRoute } from "@angular/router";
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products:any=[];
  productsInCart:Product[] = [];
  product:Product;
  value:number = 1;
  isInCart = false;

  constructor(private route: ActivatedRoute, private cartService:CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.products.push(productsForMan, productsForWoman, productsForChildren);
    this.product = this.products.flat().find(product => product.id === productIdFromRoute);
    this.checkCart(this.product);
  }

  checkCart(product){
    this.productsInCart = this.cartService.getItems();
    this.productsInCart.includes(product)? this.isInCart = true : this.isInCart = false;
  }

  addToCart(){

    this.cartService.addToCart(this.product);
    this.checkCart(this.product);
    
  }

  addQuantity(value:number, product:Product){
    this.value = value;
    product.number = this.value;
  }
}
