import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products';
import { CartService } from 'src/app/shared/cart.service';
import { FormsService } from 'src/app/shared/forms.service';
import { userAdress } from 'src/app/user-adress';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  adressInfo:userAdress;
  products:Product[]=[];
  shipping:any;
  total:number;
  orderWasSent:boolean = false;

  constructor(private formsService: FormsService, private cartService: CartService) { }

  ngOnInit(): void {

    this.adressInfo = this.formsService.getAdress();
    this.products =  this.cartService.getItems();
    this.shipping = this.formsService.getShipping();
    this.total = this.cartService.getTotal();
  }

  order(){
    this.orderWasSent = true;
  }

}
