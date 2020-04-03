
import {Component} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './home.component.html',
})

export class HomeComponent {
    constructor(){}

    onClick(): void {
        console.log('hello');
    }

}

