import { Observable, Subscription } from 'rxjs';
import { AccountState } from './../../../shared/states/account-state';
import { Account } from '../../../shared/Account';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  private login$: Observable<string>;
  private loginSub: Subscription = null;
  public account$: Observable<Account>;

  constructor(private accountService: AccountService, private store: Store) { }

  ngOnInit(): void {
    this.login$ = this.store.select(AccountState.getLogin);

    if (this.loginSub != null) {
      this.loginSub.unsubscribe();
    }

    this.login$.subscribe((login: string) => {
      this.account$ = this.accountService.getUser("thomas");
    });
  }

}
