import { Component, OnInit } from '@angular/core';
import { Account } from './../models/Account';
import { Address } from './../models/Address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tp02-uhl-thomas';

  public account: Account;

  public onAccountCreated($event: Account): void {
    this.account = $event;
  }

  public onAccountDeleted($event: Account): void {
    this.account = null;
  }

  ngOnInit(): void {
    let address: Address = new Address(
      '12 Banana st.',
      '12345',
      'Banana city',
      'Banana Island'
    );

    this.account = new Account(
      'Doe',
      'John',
      'Monsieur',
      address,
      '+33 1 22 33 44 55',
      'john.doe@banana.com',
      'the login',
      'the password'
    );
  }
}
