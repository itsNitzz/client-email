import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() type = 'text';
  @Input() controlType = 'input';
  @Input() cols = '20';
  @Input() rows = '4';

  constructor() {}

  ngOnInit(): void {}

  getErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
