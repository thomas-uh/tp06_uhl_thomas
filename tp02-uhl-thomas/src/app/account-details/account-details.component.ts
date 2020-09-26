import { Component, Input } from '@angular/core';
import { Account } from './../../models/Account';
import { Address } from './../../models/Address';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  @Input() account: Account;
  constructor() { }

}
