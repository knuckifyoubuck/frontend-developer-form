import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import { jsonForm } from '../frontend-developer-form/frontend-developer-form.component';

@Injectable({
  providedIn: 'root'
})

export class FrontendFormService {
  private notValidEmails = ['test@test.test'];

  get jsonForm() {
    return jsonForm;
  }

  Http(value: string) {
    return of(this.notValidEmails.includes(value)).pipe(delay(3000));
  }
}