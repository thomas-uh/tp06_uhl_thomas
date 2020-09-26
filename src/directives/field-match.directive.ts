import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appFieldMatch]',
    providers: [{provide: NG_VALIDATORS, useExisting: FieldMatchDirective, multi: true}]
})

export class FieldMatchDirective implements Validator{

    @Input('appFieldMatch') fieldToMatch: AbstractControl;

    private el: ElementRef;
    private renderer: Renderer2;

    constructor(el: ElementRef, renderer: Renderer2) {
        this.el = el;
        this.renderer = renderer;
    }
    validate(control: AbstractControl): { [key: string]: boolean } | null {
        return this.fieldToMatch.value === control.value ? null : { fieldnotmatching: true };
    }
}