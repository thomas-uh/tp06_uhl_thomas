import { AccountState } from './../../../shared/states/account-state';
import { browser } from 'protractor';
import { RegisterJWT } from './../../../shared/actions/account-action';
import { AccountService } from './../account.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss']
})
export class AccountLoginComponent implements OnInit {

  public formSubmited: boolean = false;
  private authentified: boolean = false;
  public jwtToken$: Observable<string>;

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get login(): AbstractControl { return this.loginForm.get('login'); }
  get password(): AbstractControl { return this.loginForm.get('password'); }

  constructor(private accountServive: AccountService, private store: Store) { }

  ngOnInit(): void {
    this.jwtToken$ = this.store.select(AccountState.getJWTToken);
  }

  onSubmit(): void {
    if (this.authentified) {
      return;
    }

    this.formSubmited = true;

    this.accountServive.login(
      this.loginForm.value.login,
      this.loginForm.value.password
    )
    .then(response => {
      if (response.body.success) {
        this.store.dispatch(new RegisterJWT(response.headers.get('authorization')));
        this.authentified = true;
      } else {
        this.loginForm.setErrors({
          connectionError: true
        });
      }
    })
    .catch(error => {
      this.loginForm.setErrors({
        unauthorized: true
      });
    });
  }

  onResetToken(): void {
    this.store.dispatch(new RegisterJWT(''));
    this.authentified = false;
  }

}
