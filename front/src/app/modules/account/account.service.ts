import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './../../shared/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }

  login(login: string, password: string)
    : Promise<HttpResponse<{
      success: boolean,
      user: {
        id: number,
        login: string
      }
    }>>
  {
    let body = new URLSearchParams();
    body.set('login', login);
    body.set('password', password);

    return this.http.post<{
      success: boolean,
      user: {
        id: number,
        login: string
      }
    }>(
      environment.backendAPI + 'users/login',
      body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        observe: 'response'
      }
      ).toPromise();
  }

  register(account: Account): Promise<Account> {
    let body = new URLSearchParams();
    body.set('account', JSON.stringify(account));

    return this.http.post<{account: string}>(
      environment.backendAPI + 'users/register',
      body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }
    )
    .toPromise()
    .then<Account>(val => JSON.parse(val.account));
  }
}
