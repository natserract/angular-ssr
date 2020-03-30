import { Component } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
    constructor(){}
    isShow = false;

    toggle(): void {
        this.isShow = !this.isShow;
        console.log('Works!');
    }
}
