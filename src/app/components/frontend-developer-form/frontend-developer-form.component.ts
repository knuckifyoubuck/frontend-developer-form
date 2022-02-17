import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators} from '@angular/forms';
import { formatDate } from '@angular/common';
import { frameworkData } from './frameworkData';
import { FrontendFormService } from '../email-validator/frontendform.service';
import { EmailFormValidator } from '../email-validator/email-validator';

@Component({
  selector: 'app-frontend-developer-form',
  templateUrl: './frontend-developer-form.component.html',
  styleUrls: ['./frontend-developer-form.component.css']
})

export class FrontendDeveloperFormComponent implements OnInit {

  objectKeys = Object.keys;

  constructor(private fb: FormBuilder, private frontendFormService: FrontendFormService) { 
  }
  
  ngOnInit(): void {
    this.frontendDeveloperForm.get('picker')?.valueChanges.subscribe(date => {
      console.log(date);
      console.log(date.toISOString);
    })
  }

  get frameworkData(): any {
    return frameworkData;
  }

  frontendDeveloperForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    framework: ['', [Validators.required]],
    frameworkVersion: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email], [EmailFormValidator.createValidator(this.frontendFormService)]],
    hobbies: this.fb.array([ 
      this.fb.group({
          name: ['', [Validators.required]],
          duration: ['', [Validators.required]],
        })
    ]),
  })
  
  get firstName(): any {
    return this.frontendDeveloperForm.get('firstName');
  } 

  get lastName(): any {
    return this.frontendDeveloperForm.get('lastName');
  } 

  get dateOfBirth(): any {
    return this.frontendDeveloperForm.get('dateOfBirth');
  } 

  get framework(): any {
    return this.frontendDeveloperForm.get('framework');
  }

  get frameworkVersion(): any {
    return this.frontendDeveloperForm.get('frameworkVersion');
  }

  get email(): any {
    return this.frontendDeveloperForm.get('email');
  } 

  get hobbies(): any {
    return this.frontendDeveloperForm.get('hobbies') as FormArray;
  }


  addHobby(): void {
    const hobbyForm = this.fb.group({
      name: ['', [Validators.required]],
      duration: ['', [Validators.required]],
    })
    this.hobbies.push(hobbyForm);
  }

  private formatBirthdateToShort(): void {
    let birthdate = this.frontendDeveloperForm.controls['dateOfBirth'].value;
    birthdate = formatDate(birthdate,'dd-MM-yyyy','en');
    this.frontendDeveloperForm.controls['dateOfBirth'].setValue(birthdate);
  } 

  private cleanInputs(): void {
    this.frontendDeveloperForm.controls['firstName'].reset();
    this.frontendDeveloperForm.controls['lastName'].reset();
    this.frontendDeveloperForm.controls['email'].reset();
    this.frontendDeveloperForm.controls['framework'].reset();
    this.frontendDeveloperForm.controls['frameworkVersion'].reset();
    this.clearArray(this.frontendDeveloperForm.controls['hobbies'] as FormArray);
  }  

  private clearArray(formArray: FormArray): void {
    while (formArray.length !== 1) {
      formArray.removeAt(1)
    }
    this.frontendDeveloperForm.controls['hobbies'].reset();
  }

  onSubmit(): void {
    this.formatBirthdateToShort();
    let jsonForm = JSON.stringify(this.frontendDeveloperForm.value);
    alert(jsonForm);
    this.cleanInputs();
  }
}

export let jsonForm: string;

export class emailAsyncValidator {
  static email() {
    return 
  }
}
