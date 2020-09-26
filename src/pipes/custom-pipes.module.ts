import { PasswordPipe } from './password.pipe';
import { NgModule } from '@angular/core';
import { PhoneNumberPipe } from './phone-number.pipe';

@NgModule({
    declarations: [
        PhoneNumberPipe,
        PasswordPipe
    ],
    exports: [
        PhoneNumberPipe,
        PasswordPipe
    ]
})
export class CustomPipes {
}
