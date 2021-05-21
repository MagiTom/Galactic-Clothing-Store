import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../../app/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() imageUrl:string;
  
  @Input() product:Product;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }


  addToCart(product,e){
    e.stopPropagation()
    this.cartService.addToCart(product)
    
  }

}
