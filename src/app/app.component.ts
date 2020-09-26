import { Component, OnInit } from '@angular/core';
import { Account } from './../models/Account';
import { Address } from './../models/Address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp02-uhl-thomas';

  public account: Account = null;

  public onAccountCreated($event: Account): void {
    this.account = $event;
  }
}
