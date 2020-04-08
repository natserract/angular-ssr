
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-dashboard',
    templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
    constructor(
        private titleService: Title
    ){}

    ngOnInit() {
        this.titleService.setTitle('Black Management - Breaking News, World News');
    }

}

