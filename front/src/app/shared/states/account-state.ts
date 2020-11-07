import { RegisterAccount } from './../actions/account-action';
import { AccountStateModel } from './account-state-model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { RegisterJWT } from '../actions/account-action';
import { Account } from '../Account';

@State<AccountStateModel>({
    name: 'account',
    defaults: {
        jwtToken: '',
        account: null,
    }
})
export class AccountState {
    @Selector()
    static getJWTToken(state: AccountStateModel): string {
        return state.jwtToken;
    }

    @Selector()
    static getAccount(state: AccountStateModel): Account {
        return state.account;
    }

    @Action(RegisterJWT)
    addJWT(
        { patchState }: StateContext<AccountStateModel>,
        { payload }: RegisterJWT
    ): void {
        patchState({
            jwtToken: payload
        });
    }

    @Action(RegisterAccount)
    addAccount(
        { patchState }: StateContext<AccountStateModel>,
        { payload }: RegisterAccount
    ): void {
        patchState({
            account: payload
        });
    }
}
