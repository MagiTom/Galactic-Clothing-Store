import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { userAdress } from '../user-adress';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  public isValid = new Subject<boolean>();
  public isLogged = new Subject<boolean>();
  public adress:userAdress;
  public shipping:{};

  constructor() { }

  checkValid(value:boolean){
    this.isValid.next(value);
    console.log(value)
  }

  onLogin(log:boolean){
    this.isLogged.next(log)
  }

  sentAdress(param:userAdress){
    // this.adress.next(param)
    this.adress = param
  }

  sentShiping(courier:{}){
    this.shipping = courier;
  }

  getAdress(){
    return this.adress;
  }

  getShipping(){
    return this.shipping;
  }

}
