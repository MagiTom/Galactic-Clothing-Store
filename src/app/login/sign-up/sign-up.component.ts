import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/forms.service';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm:FormGroup;
  adressIsValid:boolean = false;

  constructor(private fb:FormBuilder, private formsService: FormsService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validator: ConfirmedValidator('password', 'confirmPassword')
    }
    )

  this.infoAboutValid()
  }

infoAboutValid(){
  this.formsService.isValid.subscribe(res => {
    this.adressIsValid = res;
  })
  
 
}

  onSignUp(e){
    e.preventDefault()
   console.log(this.adressIsValid)
  
  }
}
