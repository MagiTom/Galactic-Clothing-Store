import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { FormsService } from 'src/app/shared/forms.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit, OnDestroy {

  shipping:any;
  choosenShipping:any;
  adressIsValid:boolean;

  constructor(private cartService: CartService, private formsService: FormsService) { }

  ngOnInit(): void {
    this.cartService.getShipping().subscribe(data => {
      this.shipping = Array.from(data);
      console.log(this.shipping)
    })

    this.infoAboutValid();
  }

  ngOnDestroy(){
   
  }

  chooseShipping(index:number){
  
    this.choosenShipping = this.shipping[index];
    this.formsService.sentShiping(this.choosenShipping);
  }

  infoAboutValid(){
    this.formsService.isValid.subscribe(res => {
      this.adressIsValid = res;
    })
  }

}
