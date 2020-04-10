import { Directive, Input, HostListener } from '@angular/core';
import { Validators } from '@angular/forms';
import { ContactComponent } from './contact.component';

@Directive({
    selector: '[appValidateDirective]',
})
export class ValidateFormDirective {
    constructor(
        host: ContactComponent
    ) {
        host.forms.get('name').setValidators([
            Validators.required,
            Validators.maxLength(50)
        ]);

        host.forms.get('email').setValidators([
            Validators.required,
            Validators.email
        ]);

        host.forms.get('message').setValidators([
            Validators.required,
            Validators.maxLength(100)
        ]);
    }

    condition: boolean;

    @Input() set appContactFormDirective(condition: boolean){
        this.condition = condition;
    }

    @HostListener('click', ['$event.target']) onClick() {
        console.log('Works');
    }
}
