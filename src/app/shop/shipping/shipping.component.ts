import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shipping;
  choosenShipping:string;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getShipping().subscribe(data => {
      this.shipping = Array.from(data);
      console.log(this.shipping)
    })
  }

}
