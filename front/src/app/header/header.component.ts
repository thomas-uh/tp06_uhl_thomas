import { AccountState } from './../shared/states/account-state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductState } from './../shared/states/product-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cartSize$: Observable<number>;
  public login$: Observable<string>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cartSize$ = this.store.select(ProductState.getNbOfProducts);
    this.login$ = this.store.select(AccountState.getLogin);
  }

  disconnect(): void {

  }
}
