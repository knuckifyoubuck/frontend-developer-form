import { FrontendFormService } from './frontendform.service';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class EmailFormValidator {
  static createValidator(frontendFormSevice: FrontendFormService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return frontendFormSevice
        .Http(control.value).pipe(
        map((result: boolean) => result ? {emailAlreadyExists: true} : {})
      );
    };
  }
}