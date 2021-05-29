import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/shared/forms.service';


@Component({
  selector: 'app-login-step',
  templateUrl: './login-step.component.html',
  styleUrls: ['./login-step.component.scss']
})
export class LoginStepComponent implements OnInit {

logged:boolean = false;

  constructor(private formsService: FormsService) { }

  ngOnInit(): void {
    this.formsService.isLogged.subscribe(res => {
      this.logged = res;
    })
  }

}
