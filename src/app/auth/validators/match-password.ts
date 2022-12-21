import { Validator, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatchPassword implements Validator {
  validate(formGroup: AbstractControl) {
    const { password, cnfrmPassword } = formGroup.value;
    if (password === cnfrmPassword) {
      return null;
    } else {
      return { passNotMatch: true };
    }
  }
}
