import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() control: FormControl;
  @Input() inputType: string;
  @Output() inputValue = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

  onChange(value){
    this.inputValue.emit(value);
  }
}

