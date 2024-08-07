// @angular
import { FormGroup, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class FormService {
    // @params
    emailPattern:string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    
	public isInvalidField(formGroup:FormGroup, field?:string, formSubmit?:boolean):boolean {
        if(!field) return false;

        if(!formGroup.get(field)) return false;

        if ( formGroup.get(field)?.invalid && formSubmit ) return true;

        return false;

    }

	errorMessage(formGroup:FormGroup, field:string):any {
        if(!field) return 'msn-error.required';
        // @params
        const formControl = formGroup.get(field);
        const minLengthError = formControl?.getError('minlength');
        
        if(!formControl) return '';

		if(formControl.getError('required')) return 'msn-error.required';

        if(minLengthError) return `msn-error.minLength`;

        if (formControl.getError('pattern')) return 'msn-error.pattern';

	}

}