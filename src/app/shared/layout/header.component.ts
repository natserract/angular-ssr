
import { Component } from '@angular/core';
import { Menu } from '../../core/models';

@Component({
    selector: 'app-layout-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent  {
    constructor(){}

    menus: Menu[] = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        }
    ];
}
