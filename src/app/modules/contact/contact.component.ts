import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from '../../core/services';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Selector from '../../store/selectors';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    forms: FormGroup;
    count$: Observable<number>;
    message$: Observable<string>;

    constructor(
        private titleService: Title,
        private formBuilder: FormBuilder,
        private localStorageService: LocalStorageService,
        private store: Store<any>
    ) {

        this.forms = this.formBuilder.group({
            name: '',
            email: '',
            message: ''
        });

        this.count$ = this.store.pipe(
            select(Selector.IncrementSelector)
        );
        this.message$ = this.store.pipe(
            select(Selector.SendPayloadSelector)
        );
    }

    ngOnInit() {
        this.titleService.setTitle('Contact | Black Management');

        // * Consume count state
        // * State has been dispatch on app.component
        this.count$.subscribe(data => console.log('Count state: ' + data));

        // * Consume count payload
        // * Payload send from root
        this.message$.subscribe(data => console.log('Payload: ' + data));
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
