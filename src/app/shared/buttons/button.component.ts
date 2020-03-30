import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
    constructor(){}
    isShow = false;

    @Input() type: string;

    toggle(): void {
        this.isShow = !this.isShow;
        console.log('Works!');
    }
}
