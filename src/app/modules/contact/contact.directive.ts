import { Directive, Input, HostListener } from '@angular/core';
import { Validators } from '@angular/forms';
import { ContactComponent } from './contact.component';

@Directive({
    selector: '[appContactFormDirective]',
})
export class ContactFormDirective {
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

    @Input() appContactFormDirective: boolean;

    @HostListener('click', ['$event.target']) onClick() {
        console.log('Works');
    }
}
