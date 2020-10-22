import { Address } from './../Address';
import { Account } from './../Account';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  public account: Account;
  public address: Address;

  constructor() { }

  ngOnInit(): void {
    this.account = history.state.acc;
    this.address = this.account.address;
  }

}
