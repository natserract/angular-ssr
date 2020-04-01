
import { Component } from '@angular/core';

@Component({
    selector: 'app-layout-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent  {
    constructor(){}

    menus: Array<string> = ['Home', 'About'];
}
