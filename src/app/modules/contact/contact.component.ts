import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from '../../core/services';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    forms: FormGroup;

    constructor(
        private titleService: Title,
        private formBuilder: FormBuilder,
        private localStorageService: LocalStorageService
    ) {

        this.forms = this.formBuilder.group({
            name: '',
            email: '',
            message: ''
        });
    }

    ngOnInit() {
        this.titleService.setTitle('Contact | Black Management');
    }

    submitForm() {
        console.log('Submitted. Check your data on local storage');
        this.localStorageService.setItem('formData', {
            formData: {
                name: this.forms.get('name').value,
                email: this.forms.get('email').value,
                message: this.forms.get('message').value
            }
        });

        this.forms.reset();
    }
}
