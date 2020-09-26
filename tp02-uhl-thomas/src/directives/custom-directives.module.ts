import { NgModule } from '@angular/core';
import { FieldMatchDirective } from './field-match.directive';

@NgModule({
    declarations: [
        FieldMatchDirective,
    ],
    exports: [
        FieldMatchDirective,
    ]
})
export class CustomDirectives {
}
