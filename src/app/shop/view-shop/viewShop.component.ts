import { Component, OnInit } from '@angular/core';
import { productsForMan, productsForWoman, productsForChildren, Product } from '../../products';



@Component({
  selector: 'app-viewShop',
  templateUrl: './viewShop.component.html',
  styleUrls: ['./viewShop.component.scss']
})
export class ViewShopComponent implements OnInit {

  productsForMan:Product[] = productsForMan;
  productsForWoman:Product[] = productsForWoman;
  productsForChildren:Product[]=productsForChildren;

  constructor() { }

  ngOnInit(): void {
  }

}
