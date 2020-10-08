import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Account } from './../../models/Account';
import { Address } from './../../models/Address';

@Component({
  selector: 'app-account-creation-form',
  templateUrl: './account-creation-form.component.html',
  styleUrls: ['./account-creation-form.component.scss']
})
export class AccountCreationFormComponent {
  @Output() accountCreated: EventEmitter<Account> = new EventEmitter<Account>();

  public genders: string[] = [
    'Madame',
    'Monsieur'
  ];

  accountForm = new FormGroup({
    lastName: new FormControl('', [Validators.required, noNumberValidator]),
    firstName: new FormControl('', [Validators.required, noNumberValidator]),
    civility: new FormControl('Madame', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required, zipCodeValidator]),
    city: new FormControl('', [Validators.required, noNumberValidator]),
    country: new FormControl('', [Validators.required, noNumberValidator]),
    phone: new FormControl('', [Validators.required, phoneNumberValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),
    login: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirmation: new FormControl('', [Validators.required]),
  });

  get lastName(): AbstractControl { return this.accountForm.get('lastName'); }
  get firstName(): AbstractControl { return this.accountForm.get('firstName'); }
  get street(): AbstractControl { return this.accountForm.get('street'); }
  get zipCode(): AbstractControl { return this.accountForm.get('zipCode'); }
  get city(): AbstractControl { return this.accountForm.get('city'); }
  get country(): AbstractControl { return this.accountForm.get('country'); }
  get phone(): AbstractControl { return this.accountForm.get('phone'); }
  get email(): AbstractControl { return this.accountForm.get('email'); }
  get login(): AbstractControl { return this.accountForm.get('login'); }
  get password(): AbstractControl { return this.accountForm.get('password'); }
  get passwordConfirmation(): AbstractControl { return this.accountForm.get('passwordConfirmation'); }

  onSubmit(): void {
    if (!this.accountForm.valid) {
      return;
    }

    const address: Address = new Address(
      this.accountForm.value.street,
      this.accountForm.value.zipCode,
      this.accountForm.value.city,
      this.accountForm.value.country
    );

    const account: Account = new Account(
      this.accountForm.value.lastName,
      this.accountForm.value.firstName,
      this.accountForm.value.civility,
      address,
      this.accountForm.value.phone,
      this.accountForm.value.email,
      this.accountForm.value.login,
      this.accountForm.value.password
    );

    this.accountCreated.emit(account);
  }
}

export function noNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /^[a-zA-Z\s]*$/;
  return regex.test(control.value) ? null : { number: true };
}

export function zipCodeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex: RegExp = /^[0-9]{5}$/;
  return regex.test(control.value) ? null : { zipcode: true };
}

export function phoneNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
  let phoneNumber: string = control.value;

  if (phoneNumber.charAt(0) === '+') {
    phoneNumber = phoneNumber.substr(4, phoneNumber.length - 3);
  }

  phoneNumber = phoneNumber.replace(/\s/g, '');

  const regex: RegExp = /^[0-9]{9}$/;
  return regex.test(phoneNumber) ? null : { phoneinvalid: true };
}
