import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountComponent } from './account/account.component';
import { AccountCreationFormComponent } from './account-creation-form/account-creation-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';


const routes: Routes = [
  {
    path: 'main',
    component: AccountComponent
  },
  {
    path: 'view',
    component: AccountDetailsComponent
  },
  {
    path: 'register',
    component: AccountCreationFormComponent
  },
  {
    path: 'login',
    component: AccountLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AccountComponentRoutingModule {}
