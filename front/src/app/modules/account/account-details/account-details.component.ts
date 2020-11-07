import { Observable } from 'rxjs';
import { AccountState } from './../../../shared/states/account-state';
import { Address } from '../../../shared/Address';
import { Account } from '../../../shared/Account';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  public account$: Observable<Account>;

  constructor(private store: Store) { }

  ngOnInit(): void {
   this.account$ = this.store.select(AccountState.getAccount);
  }

}
