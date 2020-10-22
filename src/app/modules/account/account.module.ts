import { CommonModule } from '@angular/common';
import { CustomDirectives } from './../../../directives/custom-directives.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountCreationFormComponent } from './account-creation-form/account-creation-form.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipes } from 'src/pipes/custom-pipes.module';
import { AccountComponentRoutingModule } from './account-routing.module';


@NgModule({
  declarations: [
    AccountCreationFormComponent,
    AccountDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipes,
    CustomDirectives,
    AccountComponentRoutingModule,
  ],
})
export class AccountModule {
}
