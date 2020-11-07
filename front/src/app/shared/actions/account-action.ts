import { Account } from '../Account';

export class RegisterJWT {
    static readonly type = '[Account] Add JWT';
    constructor(public payload: string) {}
}

export class RegisterAccount {
    static readonly type = '[Account] Add Account';
    constructor(public payload: Account) {}
}
