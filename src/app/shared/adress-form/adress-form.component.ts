import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormsService } from '../forms.service';
import { ZipFormControl } from './zip-form-control';
import { userAdress } from '../../user-adress';

@Component({
  selector: 'app-adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.scss']
})
export class AdressFormComponent implements OnInit, OnDestroy {
 
  model:userAdress = new userAdress('','','','', '', null);


  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['Poland', Validators.required],
      zip: new ZipFormControl('', [
        Validators.required,
        // Validators.pattern("\d{2}-\d{3}")
      ]),
    }),
  });


  constructor(private fb: FormBuilder, private formsService:FormsService) {
 
   }

ngOnInit(){
 this.changeVal()
}

ngOnDestroy(){
  this.formsService.sentAdress(this.model);
  console.log(this.model)
}
 
changeVal(){
  this.profileForm.statusChanges.subscribe(val => this.formsService.checkValid(val));
}



  updateProfile() {
    this.profileForm.setValue({
      firstName: '',
      lastName: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: '',
      }
    });
  }

}
