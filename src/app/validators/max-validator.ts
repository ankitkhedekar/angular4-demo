import { Validator, AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';
import { Directive, Input } from '@angular/core';

// @Directive({
//   selector: '[appMinValidator]'
// })
@Directive({
    selector: '[ngModel][maximum]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: MaxValidator, multi: true }
    ]
})
export class MaxValidator implements Validator {

    @Input('maximum') public value: number;

    constructor() {

    }

    validate(c: AbstractControl): { [key: string]: any } {
        if (Validators.required(c)) {
            return null
        }

        if (c.value && c.value > this.value) {
            return { maximum: { value: this.value, actual: c.value} }
        }

        return null;
    }

}
