import { Validator, AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { minimum } from './validators';

// @Directive({
//   selector: '[appMinValidator]'
// })
@Directive({
    selector: '[ngModel][minimum]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: MinValidator, multi: true }
    ]
})
export class MinValidator implements Validator {

    @Input('minimum') public value: number;

    constructor() {

    }

    validate(c: AbstractControl): { [key: string]: any } {
        return minimum(this.value)(c);
    }

}
