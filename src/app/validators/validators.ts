import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

export function minimum(value: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: any} => {
        if (Validators.required(c)) {
            return null;
        }

        if (c.value && c.value < value) {
            return { maximum: { value: value, actual: c.value} };
        }

        return null;
    };
}


export function maximum(value: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: any} => {
        if (Validators.required(c)) {
            return null;
        }

        if (c.value && c.value > value) {
            return { maximum: { value: value, actual: c.value} };
        }

        return null;
    };
}
