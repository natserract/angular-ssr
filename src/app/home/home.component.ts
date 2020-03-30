
import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    constructor(){}

    onClick(): void {
        console.log('hello');
    }

}

