import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    forms: FormGroup;

    constructor(
        private titleService: Title,
        private formBuilder: FormBuilder
    ){

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
        console.log('Submitted');
    }
}
