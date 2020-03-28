

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dashboard-list',
    templateUrl: './dashboard.list.component.html',
})

export class DashboardListComponent {
    constructor(){}

    @Input() name: string;
    @Input() onClick: () => void;

}
