import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { isNumber } from 'util';
import { isType } from '@angular/core/src/type';

@Directive({
  selector: '[Agevalidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AgevalidatorDirective, multi: true }]

})



export class AgevalidatorDirective implements Validator {

  validator: ValidatorFn;
  t: any;

  constructor() {

    this.validator = validateJuriNameFactory();

  }

  validate(c: FormControl) {
  
    return this.validator(c);
  }

}


function validateJuriNameFactory(): ValidatorFn {
  return (c: AbstractControl) => {

    let isValid = c.value;

    if (isValid > 21 && isValid < 60) {
      return null;
    }

    else {
      let t: number = parseInt(isValid)
      if ((isNumber(t)) && t < 21) {
    

        return {

          Ageptit: {
            valid: true
          }
        }
      }
      else {
        if (isValid >= 60) {

          return {
            Agegrand: {
              valid: true
            }
          }
        }
        else {
         if(isValid!=0){
         
          return {
            CaracterAge: {
              valid: true
            }

          }

        }
      }

      }
    }
  }

}
