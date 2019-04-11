import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
@Directive({
  selector: '[Salaryvalidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: SalaryvalidatorDirective, multi: true }]
})
export class SalaryvalidatorDirective implements Validator {
   public validator:ValidatorFn;

  constructor() { 
    this.validator =Salaryvalidation()
  }
  validate(c:FormControl){
    return this.validator(c);
  }

}

function Salaryvalidation(): ValidatorFn {
  return (c: AbstractControl) => {
    let isValid = c.value;
    if (isValid > 0) {
      return null;
    }
    else {
      let t:number=parseInt(isValid);
      if (t < 0) {
        return {
          Salaryngeative: {
            valid: true
          }
        }
      }
      else {
        if (isValid != 0) {
          return {
            CaractereSalary: {
              valid: true
            }
          }
        }
      }
    }
  }
}
