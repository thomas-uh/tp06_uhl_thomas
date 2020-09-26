import { CustomPipes } from '../pipes/custom-pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountCreationFormComponent } from './account-creation-form/account-creation-form.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDirectives } from 'src/directives/custom-directives.module';

@NgModule({
  declarations: [
    AppComponent,
    AccountCreationFormComponent,
    AccountDetailsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipes,
    CustomDirectives
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
