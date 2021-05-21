import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-counter',
  templateUrl: './price-counter.component.html',
  styleUrls: ['./price-counter.component.scss']
})
export class PriceCounterComponent implements OnInit {

  @Output() addNumberItems = new EventEmitter<string>();
  @Input() priceProduct:number;
  @Input() value:number;

  constructor() { }

  ngOnInit(): void {
  }

  increase(){
    this.value+=1
    this.recounting(this.value);
  }

  decrease(){
    this.value-=1
    if(this.value <= 1){
      this.value = 1;
    }

    this.recounting(this.value)
  }

  recounting(event){
   this.addNumberItems.emit(event);
  }
}
